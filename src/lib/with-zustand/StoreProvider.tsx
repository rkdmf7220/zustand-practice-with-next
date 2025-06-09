"use client";

import { type PropsWithChildren, useRef } from "react";
import type { IStore, StoreType } from "./store";
import { initializeStore, ZustandProvider } from "./store";

export interface IPreloadedStore extends Pick<IStore, "lastUpdate"> {}

export default function StoreProvider({children, ...props}: PropsWithChildren<IPreloadedStore>) {
  const storeRef = useRef<StoreType>();

  if (!storeRef.current) {
    storeRef.current = initializeStore(props);
  }

  return <ZustandProvider value={storeRef.current}>{children}</ZustandProvider>
}