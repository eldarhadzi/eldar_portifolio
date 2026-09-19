"use client";

import { motion } from "framer-motion";
import { useFadeTransition, useReduceMotion } from "./InitialLoadProvider";

// Fade-in wrapper for a page's content. Keeps the pages themselves free of client code.
// The key remounts once if the visitor prefers reduced motion: framer does not restart a running
// animation when only its transition changes, so the delayed fade would otherwise still play out.
const PageFade = ({ children, className = "" }) => {
  const transition = useFadeTransition(2.4);
  const reduceMotion = useReduceMotion();

  return (
    <motion.div
      key={reduceMotion ? "reduced" : "full"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition }}
      className={`reveal ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PageFade;
