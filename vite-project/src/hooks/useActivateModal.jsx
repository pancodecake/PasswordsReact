import React, { useEffect } from 'react'
import useClosePopup from './popupHooks/useClosePopup'

export default function useActivateModal(popupActive,setPopup,currentPopupTag,setPopupActive,multiRef) {
 
  useEffect(() => {
    console.log(popupActive,currentPopupTag,'popupActive,currentPopupTag');
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
