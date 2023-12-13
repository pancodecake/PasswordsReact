import React, { useEffect, useState } from 'react'
import useGlobalContext from '../context/GlobalContext'
import useSaveLocal from '../hooks/useSaveLocal'

export default function FormComp({btns,inputs,rest = null}) {
    const {setFormActive} = useGlobalContext()  
    function formHandeler(e) {
        e.preventDefault() 
        setFormActive(true)
      }
        return (
          <form onSubmit={(e) => formHandeler(e)} className="form">
          <ul className="form__list">
            {inputs}
            {rest} 
          </ul>
            {btns}
        </form>
        )
      
}
