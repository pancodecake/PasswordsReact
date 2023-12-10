import React, { useContext, useRef, useState,useEffect } from "react";



import useBreadcrumbs from "../hooks/useBreadcrumbs";
import useSaveLocal from "../hooks/useSaveLocal";
import useModals from "../hooks/popupHooks/useModals";




const MainContext = React.createContext();
export const MainProvider = ({ children }) => {
  const [formActive,setFormActive] = useState(false)
  const [formContent,setFormContent] = useSaveLocal({})
  const {...modals} =  useModals()


 
  return (
    <MainContext.Provider
      value={{
        useBreadcrumbs,
        formContent,
        setFormContent,
        formActive,
        setFormActive,
        ...modals

      }}
    >
      {children}
    </MainContext.Provider>
  );
};
  const useGlobalContext = () => {
  return useContext(MainContext);
};
export  default useGlobalContext