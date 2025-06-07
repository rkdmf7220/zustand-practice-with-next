"use client"

import {create} from "zustand/react";

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({count: state.count + 1})),
}))


function Counter() {
  const {count, inc} = useStore();
  return (
      <div className="counter">
        <span>{count}</span>
        <button onClick={inc}>One up</button>
      </div>
  )
}

export default function Example1() {
  return (
      <div>
        <Counter/>
      </div>)
}