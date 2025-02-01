import { View, Text } from "react-native";
import type { Todo } from "@/utils/mock";

export function Todo({ todo }: { todo: Todo }) {
  return (
    <View className="flex-row gap-2 items-center">
      <View
        className={`h-4 w-4 rounded-sm ${
          todo.completed ? "bg-selected" : "bg-transparent border border-black"
        }`}
      ></View>
      <Text
        className={`font-barlow-400 ${
          todo.completed ? "line-through decoration-selected" : ""
        }`}
      >
        {todo.title}
      </Text>
    </View>
  );
}
