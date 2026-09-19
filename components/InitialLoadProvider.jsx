"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const InitialLoadContext = createContext({ initialLoad: true, reduceMotion: false });

// initialLoad is true until the first client-side route change. A fresh visit or hard refresh
// starts as true (entrance transition plays); once the visitor navigates between routes it
// stays false for the rest of the session, even when returning to the route they landed on.
// It is also false whenever the visitor prefers reduced motion, so the entrance never plays.
export const InitialLoadProvider = ({ children }) => {
  const pathname = usePathname();
  const landedOn = useRef(pathname);
  const navigated = useRef(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  if (pathname !== landedOn.current) navigated.current = true;

  // read after mount so the server and first client render match
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const onChange = (event) => setReduceMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const value = useMemo(
    () => ({ initialLoad: !navigated.current && !reduceMotion, reduceMotion }),
    // navigated is a ref; pathname changes re-run this
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname, reduceMotion]
  );

  return <InitialLoadContext.Provider value={value}>{children}</InitialLoadContext.Provider>;
};

export const useInitialLoad = () => useContext(InitialLoadContext).initialLoad;

export const useReduceMotion = () => useContext(InitialLoadContext).reduceMotion;

// Transition for an opacity fade-in. Waits for the entrance transition on a fresh visit, and is
// instant (no delay, no duration) when the visitor prefers reduced motion.
export const useFadeTransition = (entranceDelay = 0, duration = 0.4, ease = "easeIn") => {
  const { initialLoad, reduceMotion } = useContext(InitialLoadContext);
  if (reduceMotion) return { delay: 0, duration: 0 };
  return { delay: initialLoad ? entranceDelay : 0, duration, ease };
};
