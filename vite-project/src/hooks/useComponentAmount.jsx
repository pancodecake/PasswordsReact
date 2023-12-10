import React, { useState,useId, useEffect } from "react";
import usePopupContext from "../context/PopupContext";
import  useAccordionBodyPopupsCompiler from "./popupHooks/useAccordionBodyPopupsCompiler";
import ModalComponent from "../components/modalComponent";
import { ModalContextProvider } from "../context/ModalContext";

 function useComponentAmounts(propComponentAmount,PropComponent,data,ref = null,accordionTitle) {
  const accordionComponentsDOM = [];
  const {cardPopups,setCardPopups} = usePopupContext()
  
  const componentAmount = propComponentAmount
    // param.accordionComponents.get("popupsData"),
  // param.accordionComponents.get("popups"),
  // param.accordionComponents.get("title"),
  // 'accordionHead'
  // const popupCompiler = usePopupCompiler(data.popupsData,data.popups,sectionTitle,accordionType)
  console.log(data.popups,'data.popups');
  for (let i = 0; i < componentAmount; i++) {
 
      // useEffect(() => {
      //   setCardPopups(oldVal => [...oldVal,{tag:data.title + i + sectionTitle,active:false}])

      // },[])

    accordionComponentsDOM.push(
   
      

      <PropComponent   data={data} ref={(el) => ref.current[i] = el } key={i}>
       <ModalComponent  modalComponents={data.popups} modalData={data.popupsData} BtnSvg={data.modalBtnSvg} />
      </PropComponent>
       

   
    // <PropComponent  active={cardPopups[i]?.active} index={i}  tag={cardPopups[i]?.tag} accordionType={accordionType}  data={data} ref={(el) => ref.current[i] = el } key={i}/>
    )
   }
  
   return accordionComponentsDOM;
 }

 export default useComponentAmounts;
