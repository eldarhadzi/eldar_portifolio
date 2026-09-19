import { motion } from "framer-motion"

const stairAnimation = {
  // transform, not `top`: animating `top` counts as layout shift (CLS) and is not compositor-only
  initial: {
    y: "0%"
  },
  animate: {
    y: "100%"
  },
  exit: {
    y: ["100%", "0%"]
  }
}

// calculate the reverse index
const reverseIndex = (index) =>{
  const totalSteps = 6
  return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
    {/* render 6 motion divs, each representing a step of the staris */}

    {
      [...Array(6)].map((_, index)=>{
        return (<motion.div 
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
        );
      })
    }


    </>
  )
}

export default Stairs
