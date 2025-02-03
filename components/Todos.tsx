import { Todo } from "@/components/Todo";
import { Button, View } from "react-native";
import { _todos } from "@/utils/mock";
import dayjs from "dayjs";
import { Stagger } from "@animatereactnative/stagger";
import { useState } from "react";

export default function Todos({ day }: { day: string }) {
  const [todos, setTodos] = useState(_todos);
  // if (day !== dayjs().format("YYYY-MM-DD")) return null;

  return (
    <View>
      <Stagger
        className="gap-2 mb-4 mt-2"
        enterDirection={-1}
        exitDirection={1}
      >
        {todos.map((todo, index) => (
          <Todo key={todo.id.toString() + index} todo={todo} />
        ))}
      </Stagger>
      <Button
        title="Add todo"
        onPress={() =>
          setTodos([
            ...todos,
            { id: Date.now(), title: "New todo", completed: false },
          ])
        }
      />
    </View>
  );
}
