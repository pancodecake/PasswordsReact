import React, { useEffect,useState } from 'react'
import { motion,AnimatePresence } from "framer-motion"




export default function ModalDropAnimation({children,active,modalClass}) {

    const modalDropIn = {
        hidden: {
          y: "-100vh",
          opacity: 0,
        },
        visible: {
          position:'fixed',
          y: 0,
          opacity: 1,
          top:'25%',
          left:'35%',
          zIndex:1000,
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
    variants={modalDropIn}
    // className={`${modalClass}  center modal `}
    >
    { children}
    </motion.div>}
    </AnimatePresence>
  )

}
