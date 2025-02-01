import { Todo } from "@/components/Todo";
import { View } from "react-native";
import { _todos } from "@/utils/mock";
import dayjs from "dayjs";

export default function Todos({ day }: { day: string }) {
  if (day !== dayjs().format("YYYY-MM-DD")) return null;

  return (
    <View className="flex flex-col">
      {_todos.map((todo, index) => (
        <Todo key={todo.id.toString() + index} todo={todo} />
      ))}
    </View>
  );
}
