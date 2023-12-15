import React, { useEffect } from 'react'
import useCloseModal from './useCloseModal'


export default function useActivateModal(modalActive,setmodal,currentmodalTag,multiRef) {
 
  useEffect(() => {
    setmodal(oldVal => {
      return oldVal.map(pop => {
          if(pop.tag === currentmodalTag){          
             return {...pop,active:modalActive}
          }else{
            return {...pop,active:false}
          }
        })
      })
  },[modalActive])

}
