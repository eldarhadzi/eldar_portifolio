"use client";

import { createContext, useContext, useRef } from "react";
import { usePathname } from "next/navigation";

const InitialLoadContext = createContext(true);

// True until the first client-side route change. A fresh visit or hard refresh
// starts as true (entrance transition plays); once the visitor navigates between
// routes it stays false for the rest of the session, even when returning to the
// route they landed on.
export const InitialLoadProvider = ({ children }) => {
  const pathname = usePathname();
  const landedOn = useRef(pathname);
  const navigated = useRef(false);

  if (pathname !== landedOn.current) navigated.current = true;

  return (
    <InitialLoadContext.Provider value={!navigated.current}>
      {children}
    </InitialLoadContext.Provider>
  );
};

export const useInitialLoad = () => useContext(InitialLoadContext);
