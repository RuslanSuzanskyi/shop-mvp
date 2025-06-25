"use client";

import { AppPersistor, AppStore, makeStore } from "@/lib/store";
import { useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function StoreProvider({ children }: { children: React.ReactNode}) {
  const storeAndPersistorRef = useRef<{ store: AppStore; persistor: AppPersistor } | null>(null);

  if (!storeAndPersistorRef.current) {
    storeAndPersistorRef.current = makeStore();
  }

  const { store, persistor } = storeAndPersistorRef.current;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};