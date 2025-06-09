import Clock from "@/components/with-zustand/Clock";
import Counter from "@/components/with-zustand/Counter";

export default function WithZustandPage() {
  return (
      <div>
        <h3>With Zustand</h3>
        <Clock />
        <Counter />
      </div>
  )
}