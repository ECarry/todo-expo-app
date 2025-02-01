export const _todos = [
  {
    id: 1,
    title: "Buy groceries",
    completed: false,
  },
  {
    id: 2,
    title: "Clean the room",
    completed: true,
  },
  {
    id: 3,
    title: "Pay bills",
    completed: false,
  },
];

export type Todo = (typeof _todos)[0];
