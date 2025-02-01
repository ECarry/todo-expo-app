import { localFormatter, weekDayFormatter, weekDays } from "@/constants/week";
import dayjs from "dayjs";
import { View, Text } from "react-native";
import Todos from "./Todos";

const Day = ({ day }: { day: string }) => {
  return (
    <View
      className="gap-2 p-4 pl-12 border-t-2 border-black/10"
      style={{
        height: `${100 / weekDays.length}%`,
      }}
    >
      <Text className="uppercase text-4xl font-barlow-900">
        {dayjs(day).format(weekDayFormatter)}
      </Text>
      <Text className="font-barlow-400 text-gray-600">
        {dayjs(day).format(localFormatter)} - 54°
      </Text>

      <Todos day={day} />
    </View>
  );
};

export default Day;
