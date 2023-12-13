import React, { useState,useRef,useId } from "react";
import Accordion from "../containers/accordion/Accordion";
import useGlobalContext from "../context/GlobalContext";
import { accordionContentDataMap } from "../data/accordionData";




function Sections() {
  const { useBreadcrumbs } = useGlobalContext();
  const accordionDOM =  accordionContentDataMap.get(useBreadcrumbs()).map((component, i) => {
    return (
 
       
        <Accordion key={i} accordionComponents={component}/>
      
   
    )
  });
  return accordionDOM 
}

export default Sections;
