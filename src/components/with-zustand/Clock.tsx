"use client";

import {useStore} from "@/lib/with-zustand/store";
import {useShallow} from "zustand/react/shallow";
import useInterval from "@/lib/with-zustand/useInterval";
import "./clock.css";

function useClock() {
  return useStore(
      useShallow((store) => ({
        lastUpdate: store.lastUpdate,
        light: store.light,
      }))
  );
}

function formatTime(time: number) {
  // hh:mm:ss
  return new Date(time).toJSON().slice(11, 19);
}

function Clock() {
  const {lastUpdate, light} = useClock();
  // alternative way to fetch a single piece of state;
  const tick = useStore((store) => store.tick);

  useInterval(() => {tick(Date.now());}, 1000)

  return (
      <div className={`clock ${light ? "light" : ''}`}>
        {formatTime(lastUpdate)}
      </div>
  );
}

export default Clock;