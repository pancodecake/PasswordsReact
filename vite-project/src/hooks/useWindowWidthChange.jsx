import React, { useEffect,useState } from 'react'

function useWindowWidthChange() {
    const [windowChanging,setWindowChanging] = useState(false)
    useEffect(() => {
        function windowListener(){
            return setWindowChanging(oldVal => !oldVal)
        } 
        window.addEventListener('resize', windowListener)  
        return () => window.removeEventListener('resize', windowListener)

    },[])
  return (
    windowChanging
  )
}

export default useWindowWidthChange