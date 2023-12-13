import React, { useState, useId, useEffect } from "react";
import usePopupContext from "../context/PopupContext";
import useAccordionBodyPopupsCompiler from "./popupHooks/useAccordionBodyPopupsCompiler";
import ModalComponent from "../components/modalComponent";
import { ModalContextProvider } from "../context/ModalContext";

function useComponentAmounts(propComponentAmount, PropComponent, data, ref = null, accordionTitle) {
  const accordionComponentsDOM = [];
  const { cardPopups, setCardPopups } = usePopupContext()

  const componentAmount = propComponentAmount


  for (let i = 0; i < componentAmount; i++) {



    accordionComponentsDOM.push(



      <PropComponent data={data} ref={(el) => ref.current[i] = el} key={i}>

      </PropComponent>



      // <PropComponent  active={cardPopups[i]?.active} index={i}  tag={cardPopups[i]?.tag} accordionType={accordionType}  data={data} ref={(el) => ref.current[i] = el } key={i}/>
    )
  }

  return accordionComponentsDOM;
}

export default useComponentAmounts;
