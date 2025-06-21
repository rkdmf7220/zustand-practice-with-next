import useTodoStore, {TodoType} from "@/lib/todo/todoStore";
// import {useShallow} from "zustand/react/shallow";

type PropsType = {
  todo: TodoType;
}

export default function TodoItem({todo}: PropsType) {
  // bad - selector 없이 호출 시 store 전체를 구독하게 됨.
  //       이로 인해 해당 값 외의 state가 변경되어도 상태가 업데이트되며 의도하지 않은 리렌더링 발생.
  // const {removeTodo, toggleTodo} = useTodoStore();

  // good - use Atomic selector
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  // good - useShallow in object
  // const {removeTodo, toggleTodo} = useTodoStore(useShallow((state) => ({
  //   removeTodo: state.removeTodo, toggleTodo: state.toggleTodo
  // })));

  // good - useShallow in array
  // const [removeTodo, toggleTodo] = useTodoStore(useShallow((state) => [
  //   state.removeTodo, state.toggleTodo
  // ]));

  return (
      <li>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
        <span>{todo.text}</span>
        <button onClick={() => removeTodo(todo.id)}>삭제</button>
      </li>
  )
}