import React, { useEffect } from 'react'
import useClosePopup from './popupHooks/useClosePopup'

export default function useActivateModal(popupActive,setPopup,currentPopupTag,multiRef) {
 
  useEffect(() => {
    setPopup(oldVal => {
      return oldVal.map(pop => {
          if(pop.tag === currentPopupTag){          
             return {...pop,active:popupActive}
          }else{
            return {...pop,active:false}
          }
        })
      })
  },[popupActive])

}
