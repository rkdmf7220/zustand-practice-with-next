import useTodoStore from "@/lib/todo/todoStore";

export default function FooBtn() {
  const foo = useTodoStore((state) => state.foo);
  const onClickFooBtn = useTodoStore((state) => state.changeFoo);
  const addTodo = useTodoStore((state) => state.addTodo);

  return (
      <>
        <span>foo : {JSON.stringify(foo)}</span>
        <button onClick={onClickFooBtn}>Foo 변경</button>
        <button onClick={() => addTodo('ㅁㅁ')}>ㅁㅁ 추가</button>
      </>
  )
}