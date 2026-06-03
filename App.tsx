import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import './global.css'; 

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <View className="p-6 mt-10 flex-1">
        
        {/* Header */}
        <Text className="text-3xl font-black text-white mb-1">UniMoney</Text>
        <Text className="text-slate-400 mb-8 font-medium">Travel together. Split easily.</Text>

        {/* Hero Card */}
        <View className="bg-slate-800 border border-slate-700 rounded-3xl p-6 shadow-xl mb-6">
            <Text className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Total Group Spend</Text>
            <Text className="text-4xl font-black text-emerald-400">₹42,500</Text>
        </View>

        {/* Action Button */}
        <View className="mt-auto mb-10">
          <TouchableOpacity className="w-full py-4 rounded-xl bg-blue-600 shadow-lg shadow-blue-500/30 items-center">
              <Text className="text-white font-bold text-lg">+ Add Expense</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}