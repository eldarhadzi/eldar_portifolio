"use client";

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Stairs from "./Stairs";
import { useInitialLoad } from "./InitialLoadProvider";

const StairTransition = () => {

  const pathname = usePathname()
  const initialLoad = useInitialLoad()

  // the wipe is an entrance effect: fresh visits and hard refreshes only
  if (!initialLoad) return null

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="entrance-overlay h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>

          <motion.div 
            className="entrance-overlay h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
            }}
          />

        </div>
      </AnimatePresence>
    </>
  )
}

export default StairTransition
