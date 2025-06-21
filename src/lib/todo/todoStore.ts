import {create} from "zustand/react";

export type TodoType = {
  text: string;
  completed: boolean;
  id: number;
}

type StoreType = {
  todos: TodoType[],
  foo: boolean;
  addTodo: (text: string) => void,
  removeTodo: (id: number) => void,
  toggleTodo: (id: number) => void,
  changeFoo: () => void,
}

const useTodoStore = create<StoreType>((set) => ({
  todos: [],
  foo: false,
  addTodo: (text) => set((state) => ({
    todos: [...state.todos, {text, completed: false, id: Date.now()}]
  })),
  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter(item => item.id !== id)
  })),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(item => item.id === id ? { ...item, completed: !item.completed} : item)
  })),
  changeFoo: () => set((state) => ({
    foo: !state.foo
  }))
}));

export default useTodoStore;