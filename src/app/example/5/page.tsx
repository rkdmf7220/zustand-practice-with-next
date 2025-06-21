"use client"

import TodoList from "@/components/todo/TodoList";
import AddTodo from "@/components/todo/AddTodo";
import FooBtn from "@/components/todo/FooBtn";

export default function TodoExamplePage() {

  return (
      <div>
        <h2>Todo List</h2>
        <AddTodo />
        <TodoList />
        <FooBtn />
      </div>
  );
}