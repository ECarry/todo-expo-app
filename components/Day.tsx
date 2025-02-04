import { localFormatter, weekDayFormatter, weekDays } from "@/constants/week";
import dayjs from "dayjs";
import { Text, useWindowDimensions } from "react-native";
import Todos from "./Todos";
import { Accordion } from "@animatereactnative/accordion";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Day = ({ day }: { day: string }) => {
  const { height } = useWindowDimensions();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <Accordion.Accordion
      isOpen={dayjs(day).isSame(dayjs(), "day")}
      className="gap-2 pr-4 pt-4 pl-12 border-t-2 border-black/10"
      style={{
        minHeight: (height - top - bottom) / weekDays.length,
      }}
    >
      <Accordion.Header>
        <Text className="uppercase text-4xl font-barlow-900">
          {dayjs(day).format(weekDayFormatter)}
        </Text>
        <Text className="font-barlow-400 text-gray-600">
          {dayjs(day).format(localFormatter)} - 22°C
        </Text>
      </Accordion.Header>

      <Accordion.Expanded>
        <Todos day={day} />
      </Accordion.Expanded>
    </Accordion.Accordion>
  );
};

export default Day;
