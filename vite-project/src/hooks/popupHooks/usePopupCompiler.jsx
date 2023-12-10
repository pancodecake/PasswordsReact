import React, { useId,useImperativeHandle,useEffect,useRef, useLayoutEffect } from 'react'
import usePopupContext from '../../context/PopupContext'


export default function usePopupCompiler(data,popupComponent,popupSectionTitle,accordionPart,length,bodyElIndex) {   

  const { accordionHeadPopup,setAccordionHeadPopup } = usePopupContext();
  const popupDOM = []
  for(let i = 0;i < length;i++){
    if(accordionPart === 'accordionHead'){
      const PopupComponent = popupComponent[i]    
      useEffect(() => {
        setAccordionHeadPopup(oldVal => ([...oldVal,{tag:`${data[i].tag  + i + popupSectionTitle}`,active:false}]))
      },[]) 
      popupDOM.push(<PopupComponent tag={accordionHeadPopup[i]?.tag} active={accordionHeadPopup[i]?.active}  key={data[i].tag + i}  data={data[i]} />)
    }
  }
  return popupDOM
   

}
