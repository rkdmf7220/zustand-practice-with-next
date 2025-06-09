// 'use client'

import {createContext, useContext} from "react";
// import {createStore} from "zustand/vanilla";
import {createStore, useStore as useZustandStore} from "zustand";
import {IPreloadedStore} from "@/lib/with-zustand/StoreProvider";

export interface IStore {
  lastUpdate: number;
  light: boolean;
  count: number;
  tick: (lastUpdate: number) => void;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

function getDefaultInitialState() {
  return {
    lastUpdate: new Date(1970, 1, 1).getTime(),
    light: false,
    count: 0,
  } as const;
}

export type StoreType = ReturnType<typeof initializeStore>;

const storeContext = createContext<StoreType | null>(null);

export const ZustandProvider = storeContext.Provider;

export function useStore<T>(selector: (state: IStore) => T) {
  const store = useContext(storeContext);
  if (!store) throw new Error('Store is missing the provider!');

  return useZustandStore(store, selector);
}

export function initializeStore(preloadedState: IPreloadedStore) {
  return createStore<IStore>((set, get) => ({
    ...getDefaultInitialState(),
    ...preloadedState,
    tick: (lastUpdate) => set({lastUpdate, light: !get().light}),
    increment: () => set({count: get().count + 1}),
    decrement: () => set({count: get().count - 1}),
    reset: () => set({count: getDefaultInitialState().count})
  }));
}