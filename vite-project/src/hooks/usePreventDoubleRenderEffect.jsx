import React, { useEffect, useRef } from 'react'

export default function usePreventDoubleRenderEffect(func,dep = '') {
    const firstRender = useRef(true)
    useEffect(() => {
     if(firstRender.current === false){
        func()
     }
     return () => firstRender.current = false
       
    },[...dep])
  

}
