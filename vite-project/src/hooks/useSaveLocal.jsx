import React, { useEffect, useState } from 'react'

export default function useSaveLocal() {
      const [formContent, setFormContent] = useState({})
      
     useEffect(() => {
      for(let [key,val] of Object.entries(formContent)){      
            localStorage.setItem(key,JSON.stringify(val))
      }
     },[formContent])
   return [formContent,setFormContent]
 
}
