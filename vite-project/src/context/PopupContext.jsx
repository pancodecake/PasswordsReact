import React, { useContext, useState, useRef, useId, useEffect } from "react";
import useAccordionHeadPopup from "../hooks/popupHooks/useAccordionHeadPopup";
import useCardPopup from "../hooks/popupHooks/useCardPopup";




const PopupContext = React.createContext();
export const PopupContextProvider = ({ children }) => {
  const {...AccordionHeadPopup} = useAccordionHeadPopup()
  const {...cardPopup} = useCardPopup()

  return (
    <PopupContext.Provider
      value={{...AccordionHeadPopup,...cardPopup}}
    >
      {children}
    </PopupContext.Provider>
  );
};

const usePopupContext = () => {
  return useContext(PopupContext);
};

export default usePopupContext;
