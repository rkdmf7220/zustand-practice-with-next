import React, {useState} from "react";
import useTodoStore from "@/lib/todo/todoStore";

export default function AddTodo() {
  const [text, setText] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const onSubmitBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
      <form onSubmit={onSubmitBtn}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button type="submit">추가</button>
      </form>
  )
}