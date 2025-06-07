"use client"

import {create} from "zustand/react";

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
  updateBears: (newBears) => set((state) => ({bears: newBears}))
}))

function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} bears around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  const updateBears = useStore((state) => state.updateBears);
  return (
      <>
        <button onClick={increasePopulation}>One up</button>
        <button onClick={removeAllBears}>Remove all bears</button>
        <button onClick={() => updateBears(3)}>Set bears to 3</button>
      </>)
}

export default function Example2() {
  return (
      <>
        <BearCounter/>
        <Controls/>
      </>)
}