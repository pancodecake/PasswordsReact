import React, { useState,useRef,useId } from "react";
import Accordion from "../containers/accordion/Accordion";
import useGlobalContext from "../context/GlobalContext";
import { accordionContentDataMap } from "../data/accordionData";
import { PopupContextProvider } from "../context/PopupContext";



function Sections() {
  const { useBreadcrumbs } = useGlobalContext();
  const accordionDOM =  accordionContentDataMap.get(useBreadcrumbs()).map((component, i) => {
    return (
      <PopupContextProvider>
       
        <Accordion key={i} accordionComponents={component}/>
      
      </PopupContextProvider>
    )
  });
  return accordionDOM 
}

export default Sections;
