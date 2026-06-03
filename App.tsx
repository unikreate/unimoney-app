import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import './global.css';

// --- MOCK SCREENS FOR LOCAL TESTING ---

// 1. Mock Login Screen
function MockLoginScreen({ onNext }) {
  return (
    <SafeAreaView className="flex-1 bg-slate-950 p-6 justify-center">
      <View className="items-center mb-10">
        <Text className="text-4xl font-black text-white mb-2">UniMoney</Text>
        <Text className="text-slate-400 text-center">Enter your credentials to access your trips.</Text>
      </View>
      <TextInput placeholder="Username" placeholderTextColor="#64748b" className="w-full bg-slate-900 text-white px-5 py-4 rounded-xl mb-3" />
      <TextInput placeholder="Password" placeholderTextColor="#64748b" secureTextEntry className="w-full bg-slate-900 text-white px-5 py-4 rounded-xl mb-6" />
      <TouchableOpacity onPress={onNext} className="w-full py-4 rounded-xl bg-blue-600 items-center">
        <Text className="text-white font-bold text-lg">ACCESS TRIPS</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// 2. Mock Trip Hub Screen
function MockTripHubScreen({ onNext }) {
  return (
    <SafeAreaView className="flex-1 bg-slate-950 p-6">
      <Text className="text-3xl font-black text-white mt-10 mb-8">Your Trips</Text>
      
      <TouchableOpacity onPress={onNext} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 mb-6">
        <Text className="text-white font-bold text-lg mb-1">🏖️ Goa Weekend</Text>
        <Text className="text-slate-400 text-sm mb-4">4 Members</Text>
        <View className="bg-blue-600 py-3 rounded-lg items-center">
           <Text className="text-white font-bold">Open Trip</Text>
        </View>
      </TouchableOpacity>

      <View className="border-t border-slate-800 my-6" />
      
      <Text className="text-xl font-bold text-white mb-4">Start New</Text>
      <TouchableOpacity className="bg-emerald-600 p-4 rounded-xl items-center mb-4">
        <Text className="text-white font-bold">Create New Trip</Text>
      </TouchableOpacity>
      <TextInput placeholder="Enter Trip Code..." placeholderTextColor="#64748b" className="w-full bg-slate-900 text-white px-5 py-4 rounded-xl" />
    </SafeAreaView>
  );
}


// --- MAIN APP (NAVIGATION CONTROLLER) ---
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  if (currentScreen === 'login') {
    return <MockLoginScreen onNext={() => setCurrentScreen('hub')} />;
  }

  if (currentScreen === 'hub') {
    return <MockTripHubScreen onNext={() => setCurrentScreen('dashboard')} />;
  }

  // Dashboard Screen
  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <View className="p-6 mt-10 flex-1">
        
        {/* Header */}
        <Text className="text-3xl font-black text-white mb-1">UniMoney</Text>
        <Text className="text-slate-400 mb-8 font-medium">Goa Weekend Trip</Text>

        {/* Hero Card */}
        <View className="bg-slate-800 border border-slate-700 rounded-3xl p-6 shadow-xl mb-6">
            <Text className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Total Group Spend</Text>
            <Text className="text-4xl font-black text-emerald-400">₹42,500</Text>
        </View>

        {/* Action Buttons */}
        <View className="mt-auto mb-10 space-y-4">
          <TouchableOpacity className="w-full py-4 rounded-xl bg-blue-600 items-center mb-3">
              <Text className="text-white font-bold text-lg">+ Add Expense</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="w-full py-4 rounded-xl bg-slate-800 items-center border border-slate-700"
            onPress={() => setCurrentScreen('hub')}
          >
              <Text className="text-slate-400 font-bold">Back to Hub</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}