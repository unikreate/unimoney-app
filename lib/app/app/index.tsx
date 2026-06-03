// app/index.tsx
import { ActivityIndicator, View } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 bg-black justify-center items-center">
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
}