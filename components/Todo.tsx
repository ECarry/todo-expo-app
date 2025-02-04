import { View, Text } from "react-native";
import type { Todo } from "@/utils/mock";
import { Check } from "lucide-react-native";

export function Todo({ todo }: { todo: Todo }) {
  return (
    <View className="flex-row gap-2 items-center">
      <View
        className={`h-4 w-4 rounded-sm flex items-center justify-center ${
          todo.completed ? "bg-selected" : "bg-transparent border border-black"
        }`}
      >
        {todo.completed && (
          <Check size={10} absoluteStrokeWidth className="stroke-white" />
        )}
      </View>

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
