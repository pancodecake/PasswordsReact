import React from 'react'
import { motion,AnimatePresence } from "framer-motion"


export default function PopupDropAnimation({children,active,popupClass}) {
    const popupDropIn = {
        hidden: {
          y: "-100vh",
          opacity: 0,
        },
        visible: {
          y: "0",
          opacity: 1,
          transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
          },
        },
        exit: {
          y: "100vh",
          opacity: 0,
        },
      }
  return (
    <AnimatePresence  initial={false} onExitComplete={() => null}>

    {active && <motion.div     
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={popupDropIn}
    // className={`${popupClass}  center popup `}
    >
    { children}
    </motion.div>}
    </AnimatePresence>
  )

}
