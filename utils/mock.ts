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
  {
    id: 4,
    title: "Call the doctor",
    completed: false,
  },
  {
    id: 5,
    title: "Read a book",
    completed: true,
  },
  {
    id: 6,
    title: "Watch a movie",
    completed: false,
  },
];

export type Todo = (typeof _todos)[0];
