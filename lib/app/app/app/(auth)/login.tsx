// app/(auth)/login.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../../lib/supabase';

export default function LoginScreen() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState(''); // Formatted YYYY-MM-DD
  const [loading, setLoading] = useState(false);

  async function handleAuth() {
    setLoading(true);
    if (isSignUp) {
      // 1. Sign up user in Auth schema
      const { data, error } = await supabase.auth.signUp({ email, password });
      
      if (error) Alert.alert('Sign Up Error', error.message);
      
      if (data.user) {
        // 2. Insert extra details into public profiles table
        const { error: profileError } = await supabase.from('profiles').insert([
          { id: data.user.id, username, full_name: fullName, dob }
        ]);
        if (profileError) Alert.alert('Profile Error', profileError.message);
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) Alert.alert('Login Error', error.message);
    }
    setLoading(false);
  }

  return (
    <View className="flex-1 bg-black justify-center p-6">
      <Text className="text-white text-3xl font-bold mb-6 text-center">
        {isSignUp ? 'Create UniMoney Account' : 'Welcome back'}
      </Text>
      
      {isSignUp && (
        <>
          <TextInput placeholder="Username" placeholderTextColor="#666" value={username} onChangeText={setUsername} className="bg-zinc-900 text-white p-4 rounded-lg mb-3" />
          <TextInput placeholder="Full Name" placeholderTextColor="#666" value={fullName} onChangeText={setFullName} className="bg-zinc-900 text-white p-4 rounded-lg mb-3" />
          <TextInput placeholder="DOB (YYYY-MM-DD)" placeholderTextColor="#666" value={dob} onChangeText={setDob} className="bg-zinc-900 text-white p-4 rounded-lg mb-3" />
        </>
      )}

      <TextInput placeholder="Email" placeholderTextColor="#666" value={email} onChangeText={setEmail} autoCapitalize="none" className="bg-zinc-900 text-white p-4 rounded-lg mb-3" />
      <TextInput placeholder="Password" placeholderTextColor="#666" value={password} onChangeText={setPassword} secureTextEntry autoCapitalize="none" className="bg-zinc-900 text-white p-4 rounded-lg mb-6" />

      <TouchableOpacity onPress={handleAuth} disabled={loading} className="bg-indigo-600 p-4 rounded-lg items-center">
        <Text className="text-white font-semibold">{loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Log In'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)} className="mt-4 items-center">
        <Text className="text-zinc-400">{isSignUp ? 'Already have an account? Log In' : 'New to UniMoney? Sign Up'}</Text>
      </TouchableOpacity>
    </View>
  );
}
