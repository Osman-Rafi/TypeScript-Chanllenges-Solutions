/* 
-> Problem statement
-> https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md
*/

type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

type TodoPreview = MyPick<Todo, "title" | "description">;

const todo: TodoPreview = {
  title: "Doing some TS",
  description: "solving TS challenges",
};
