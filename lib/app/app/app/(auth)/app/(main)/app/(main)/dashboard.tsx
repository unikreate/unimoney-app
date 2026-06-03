// app/(main)/dashboard.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { supabase } from '../../lib/supabase';

export default function DashboardScreen() {
  return (
    <View className="flex-1 bg-black p-6 justify-between">
      <View className="mt-12">
        <Text className="text-zinc-400 text-sm uppercase tracking-wider">Total Active Balance</Text>
        <Text className="text-white text-5xl font-extrabold mt-2">₹0.00</Text>
      </View>

      <View className="space-y-4">
        <TouchableOpacity className="bg-indigo-600 p-4 rounded-xl items-center w-full">
          <Text className="text-white font-semibold text-lg">+ Add New Expense</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => supabase.auth.signOut()} className="border border-zinc-700 p-4 rounded-xl items-center w-full">
          <Text className="text-zinc-400 font-medium">Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}