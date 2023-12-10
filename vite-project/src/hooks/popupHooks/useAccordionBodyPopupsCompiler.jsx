import React, { useEffect } from 'react'
import usePopupContext from '../../context/PopupContext';

export default function useAccordionBodyPopupsCompiler(popupData,popupComponent,popupAmout,accordionTitle,bodyElIndex) {   
  const { cardPopups,setCardPopups } = usePopupContext();
  const popupDOM = []
  for(let i = 0;i < popupAmout;i++){

      const PopupComponent = popupComponent[i]
      useEffect(() => {
        setCardPopups(oldVal => ([...oldVal,{tag:`${popupData[i].tag + i + accordionTitle + bodyElIndex}`,active:false}]))
      },[]) 
      popupDOM.push(<PopupComponent tag={cardPopups[bodyElIndex]?.tag} active={cardPopups[bodyElIndex]?.active}  key={popupData[i].tag + i}  popupData={popupData[i]} />)
  }
  return popupDOM

}
