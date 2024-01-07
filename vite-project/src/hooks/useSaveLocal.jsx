import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
const socket = io.connect('http://localhost:5099')

export default function useSaveLocal(active) {
      const [formContent, setFormContent] = useState({})
      console.log(active,'formActive');
      useEffect(() => {

      for(let [key,val] of Object.entries(formContent)){      
      localStorage.setItem(key,JSON.stringify(val))
      socket.emit('toBackMsg',{key:val})
      socket.on('toFrontMsg',data => {
        console.log('toFrontMsg',data);
      })
      console.log(key,val,'keyval');
   
      }
     },[formContent,socket])
   return [formContent,setFormContent]
 
}
