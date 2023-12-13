import React, { useCallback, useState } from 'react'

export default function useCallbackRef() {
    const [ref,setRef] = useState(null);
    const refCallback = useCallback((node) => {
        if(node!== null){
            setRef(node)
        }
    },[])
    return [ref,refCallback]
}
