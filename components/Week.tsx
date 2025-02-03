import { ScrollView, View } from "react-native";
import { weekDays } from "@/constants/week";
import Day from "./Day";
import Animated, {
  LinearTransition,
  useAnimatedStyle,
} from "react-native-reanimated";

const Week = () => {
  return (
    <ScrollView>
      <Animated.View
        layout={LinearTransition.springify().damping(80).stiffness(200)}
      >
        {weekDays.map((day) => (
          <Day key={day} day={day} />
        ))}
      </Animated.View>
    </ScrollView>
  );
};

export default Week;
