import React, { useEffect,useState,useRef } from 'react'
import { motion,AnimatePresence } from "framer-motion"
import useCallbackRef from '../../../hooks/useCallbackRef'




export default function ModalDropAnimation({children,active}) {

  const [rect,ref] = useCallbackRef()

  if(rect !== null){
    rect.style.top = ((window.innerHeight - rect.firstChild.clientHeight) / 2) + 'px'
  }




    const modalDropIn = {
        hidden: {
          y: "-100vh",
          opacity: 0,
        },
        visible: {
          position:'fixed',
          y: 0,
          opacity: 1,
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
    ref={ref}
    // className={`${modalClass}  center modal `}
    >
    { children}
    </motion.div>}
    </AnimatePresence>
  )

}
