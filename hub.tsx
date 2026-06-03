import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import '../global.css';

export default function TripHubScreen() {
  const [isJoining, setIsJoining] = useState(false);
  const [joinCode, setJoinCode] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6">
          <View className="w-full max-w-md mx-auto py-8">
            
            {/* Greeting Section */}
            <View className="mb-10">
              <Text className="text-slate-400 font-bold uppercase tracking-wider mb-1">Welcome Back</Text>
              <Text className="text-3xl font-black text-white">Where to next?</Text>
            </View>

            {/* Active Trips List (Mock Data) */}
            <View className="mb-10">
              <Text className="text-white font-bold text-lg mb-4">Your Active Trips</Text>
              
              <TouchableOpacity className="bg-slate-900 border border-slate-800 p-5 rounded-2xl mb-3 flex-row justify-between items-center shadow-lg shadow-black/20">
                <View>
                  <Text className="text-white font-bold text-xl mb-1">Goa 2026</Text>
                  <Text className="text-slate-400 text-xs font-medium">Role: Admin • 6 Members</Text>
                </View>
                <View className="bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  <Text className="text-emerald-400 font-bold text-xs">Active</Text>
                </View>
              </TouchableOpacity>

            </View>

            {/* Actions Section */}
            <View className="space-y-4 border-t border-slate-800 pt-8">
              
              {/* Create New Trip Button */}
              <TouchableOpacity className="w-full bg-indigo-600 p-5 rounded-2xl shadow-lg shadow-indigo-600/30 flex-row items-center mb-4">
                <View className="w-10 h-10 bg-white/20 rounded-xl items-center justify-center mr-4">
                  <Text className="text-white font-black text-xl">+</Text>
                </View>
                <View>
                  <Text className="text-white font-bold text-lg">Create New Trip</Text>
                  <Text className="text-indigo-200 text-xs">Generate a code and become Admin</Text>
                </View>
              </TouchableOpacity>

              {/* Join Trip Button / Input Toggle */}
              {!isJoining ? (
                <TouchableOpacity 
                  onPress={() => setIsJoining(true)}
                  className="w-full bg-slate-900 border border-slate-700 p-5 rounded-2xl flex-row items-center"
                >
                  <View className="w-10 h-10 bg-slate-800 rounded-xl items-center justify-center mr-4 border border-slate-700">
                    <Text className="text-slate-400 font-black text-xl">></Text>
                  </View>
                  <View>
                    <Text className="text-white font-bold text-lg">Join a Friend's Trip</Text>
                    <Text className="text-slate-400 text-xs">Enter a 6-digit trip code</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View className="w-full bg-slate-900 border border-blue-500/50 p-5 rounded-2xl shadow-xl shadow-blue-500/10">
                  <Text className="text-white font-bold mb-3">Enter Trip Code</Text>
                  <View className="flex-row gap-3">
                    <TextInput 
                      value={joinCode}
                      onChangeText={setJoinCode}
                      placeholder="e.g. GOA-98X"
                      placeholderTextColor="#64748b"
                      autoCapitalize="characters"
                      className="flex-1 bg-slate-950 text-white px-4 py-3 rounded-xl border border-slate-800 focus:border-blue-500 uppercase tracking-widest font-bold"
                    />
                    <TouchableOpacity className="bg-blue-600 px-6 py-3 rounded-xl justify-center">
                      <Text className="text-white font-bold">Join</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={() => setIsJoining(false)} className="mt-4 items-center">
                    <Text className="text-slate-500 text-xs font-bold">Cancel</Text>
                  </TouchableOpacity>
                </View>
              )}

            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}