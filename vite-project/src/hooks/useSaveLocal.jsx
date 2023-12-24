import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
const socket = io.connect('http://localhost:3001')
export default function useSaveLocal(active) {
      const [formContent, setFormContent] = useState({})
      console.log(active,'formActive');
      useEffect(() => {
      socket.emit('send_form_content',formContent)
      for(let [key,val] of Object.entries(formContent)){      
      localStorage.setItem(key,JSON.stringify(val))
      console.log(key,val,'keyval');
   
      }
     },[formContent,socket])
   return [formContent,setFormContent]
 
}
