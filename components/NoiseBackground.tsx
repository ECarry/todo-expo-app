import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const NoiseBackground = () => {
  return (
    <LinearGradient
      colors={["#d1d5db", "#d1d5db"]}
      start={[0, 0]}
      end={[0, 1]}
      className="flex-1 absolute inset-0"
    >
      <Image
        source={require("@/assets/images/todo_bg.png")}
        resizeMode="repeat"
        className="absolute inset-0 w-full h-full"
      />
    </LinearGradient>
  );
};

export default NoiseBackground;
