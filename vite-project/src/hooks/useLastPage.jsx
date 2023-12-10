import React, { useEffect, useRef } from "react";

const useLastPage = (location) => {

    const prevLocRef = useRef(location)
    
    useEffect(()=>{
    
    prevLocRef.current = location
    
    },[location])
    
    return prevLocRef.current
}

export default useLastPage;
