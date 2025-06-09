"use client";

import {useStore} from "@/lib/with-zustand/store";
import {useShallow} from "zustand/react/shallow";

function useCounter() {
  return useStore(
      useShallow((store) => ({
        count: store.count,
        increment: store.increment,
        decrement: store.decrement,
        reset: store.reset,
      }))
  )
}

function Counter() {
  const {count, increment, decrement, reset} = useCounter();
  return (
      <div>
        <h1>Count : <span>{count}</span></h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>)
}

export default Counter;