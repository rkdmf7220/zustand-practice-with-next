import useTodoStore from "@/lib/todo/todoStore";
import TodoItem from "@/components/todo/TodoItem";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  return (
      <ul>
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
  )
}