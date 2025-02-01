import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-3xl font-bold text-blue-500 font-barlow-700">
        Home
      </Text>
    </SafeAreaView>
  );
}
