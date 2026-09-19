"use client";

import { AnimatePresence, delay } from "framer-motion"
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion';
import { useInitialLoad } from "./InitialLoadProvider";

const PageTransition = ({children}) => {

  const pathname = usePathname()
  const initialLoad = useInitialLoad()

  return (
    <AnimatePresence>

      {initialLoad && (
        <div key={pathname}>
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{
              opacity:0,
              transition: {delay:1, duration:0.4, ease: "easeInOut"},
            }}
            className="entrance-overlay h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          />
        </div>
      )}

      {children}
    </AnimatePresence>
  )
}

export default PageTransition
