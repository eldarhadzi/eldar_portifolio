"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useFadeTransition, useReduceMotion } from "./InitialLoadProvider";

const Photo = () => {
  const outerFade = useFadeTransition(2, 0.4, "easeIn");
  const imageFade = useFadeTransition(2.4, 0.4, "easeInOut");
  const reduceMotion = useReducedMotion();
  const remountKey = useReduceMotion() ? "reduced" : "full";

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div 
        key={remountKey}
        className="reveal"
        initial={{ opacity:0 }} 
        animate={{ opacity:1, transition: outerFade }}>

        {/* image */}
        <motion.div
          initial={{ opacity:0 }} 
          animate={{ opacity:1, transition: imageFade }}
         className="reveal w-[208px] h-[208px] sm:w-[288px] sm:h-[288px] xl:w-[488px] xl:h-[488px] rounded-full overflow-hidden absolute">
          <Image 
            src="/assets/eldarone.png" 
            priority 
            quality={85} 
            fill 
            sizes="(min-width: 1200px) 488px, (min-width: 640px) 288px, 208px"
            alt="Portrait of Eldar Hadžović"
            className="object-cover" 
          />
        </motion.div>

        {/* circle */}
        <motion.svg 
          className="w-[215px] sm:w-[295px] xl:w-[500px] h-[215px] sm:h-[295px] xl:h-[500px]" 
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns=""
        >
          <motion.circle 
            cx="253" 
            cy="253" 
            r="250" 
            stroke="#00ff99" 
            strokeWidth="4" 
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray: "24 10 0 0"}}
            animate={reduceMotion ? {} : {
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.svg>

      </motion.div>
    </div>
  );
};

export default Photo;

