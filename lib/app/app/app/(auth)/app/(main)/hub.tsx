// app/(main)/hub.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'expo-router';

export default function HubScreen() {
  const [tripCode, setTripCode] = useState('');
  const [tripTitle, setTripTitle] = useState('');
  const router = useRouter();

  // Helper function to generate a readable unique code
  const generateTripCode = () => 'TRIP-' + Math.random().toString(36).substring(2, 8).toUpperCase();

  async function createTrip() {
    if (!tripTitle) return Alert.alert('Error', 'Please name your trip');
    
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) return;

    const generatedCode = generateTripCode();

    // 1. Create Trip row
    const { data: trip, error } = await supabase
      .from('trips')
      .insert([{ trip_code: generatedCode, title: tripTitle, created_by: user.id }])
      .select()
      .single();

    if (error) return Alert.alert('Error creating trip', error.message);

    // 2. Automatically link creator as member
    await supabase.from('trip_members').insert([{ trip_id: trip.id, user_id: user.id }]);
    
    Alert.alert('Trip Created!', `Share Code: ${generatedCode}`);
    router.push('/dashboard');
  }

  async function joinTrip() {
    if (!tripCode) return Alert.alert('Error', 'Please input a Trip Code');

    const user = (await supabase.auth.getUser()).data.user;
    if (!user) return;

    // 1. Find trip by code
    const { data: trip, error } = await supabase
      .from('trips')
      .where('trip_code', '==', tripCode.trim().toUpperCase()) // Concept check
      .select()
      .maybeSingle();

    // Note: Use standard supabase filtering syntax
    const { data: foundTrip, error: fetchError } = await supabase
      .from('trips')
      .select('*')
      .eq('trip_code', tripCode.trim().toUpperCase())
      .maybeSingle();

    if (fetchError || !foundTrip) return Alert.alert('Error', 'Trip not found');

    // 2. Add user to the trip spokes
    const { error: joinError } = await supabase
      .from('trip_members')
      .insert([{ trip_id: foundTrip.id, user_id: user.id }]);

    if (joinError) return Alert.alert('Error joining', 'You might already be a member of this trip.');

    router.push('/dashboard');
  }

  return (
    <View className="flex-1 bg-black justify-center p-6">
      <Text className="text-white text-3xl font-bold mb-8 text-center">UniMoney Hub</Text>
      
      {/* Create Box */}
      <View className="bg-zinc-900 p-5 rounded-xl mb-6">
        <Text className="text-white text-lg font-semibold mb-3">Start a New Trip</Text>
        <TextInput placeholder="Trip Name (e.g., Goa 2026)" placeholderTextColor="#666" value={tripTitle} onChangeText={setTripTitle} className="bg-zinc-800 text-white p-3 rounded-lg mb-3" />
        <TouchableOpacity onPress={createTrip} className="bg-indigo-600 p-3 rounded-lg items-center">
          <Text className="text-white font-medium">Create Trip</Text>
        </TouchableOpacity>
      </View>

      {/* Join Box */}
      <View className="bg-zinc-900 p-5 rounded-xl">
        <Text className="text-white text-lg font-semibold mb-3">Join Existing Trip</Text>
        <TextInput placeholder="Enter Trip ID (e.g., TRIP-X72F)" placeholderTextColor="#666" value={tripCode} onChangeText={setTripCode} autoCapitalize="characters" className="bg-zinc-800 text-white p-3 rounded-lg mb-3" />
        <TouchableOpacity onPress={joinTrip} className="bg-emerald-600 p-3 rounded-lg items-center">
          <Text className="text-white font-medium">Join Trip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}