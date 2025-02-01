import { View } from "react-native";
import { weekDays } from "@/constants/week";
import Day from "./Day";

const Week = () => {
  return (
    <View>
      {weekDays.map((day) => (
        <Day key={day} day={day} />
      ))}
    </View>
  );
};

export default Week;
