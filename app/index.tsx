import NoiseBackground from "@/components/NoiseBackground";
import { SafeAreaView } from "react-native-safe-area-context";
import Week from "@/components/Week";
import { Accordion } from "@animatereactnative/accordion";

export default function Home() {
  return (
    <SafeAreaView className="flex-1">
      <NoiseBackground />
      <Week />
    </SafeAreaView>
  );
}
