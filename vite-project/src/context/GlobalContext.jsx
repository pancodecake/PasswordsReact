import React, { useContext, useRef, useState,useEffect } from "react";



import useBreadcrumbs from "../hooks/useBreadcrumbs";
import useSaveLocal from "../hooks/useSaveLocal";
import useModals from "../containers/popups/hooks/useModals";
import useChildModals from "../containers/popups/hooks/useChildModals";




const MainContext = React.createContext();
export const MainProvider = ({ children }) => {
  const [formActive,setFormActive] = useState(false)
  const [formContent,setFormContent] = useSaveLocal({})





 
  return (
    <MainContext.Provider
      value={{
        useBreadcrumbs,
        formContent,
        setFormContent,
        formActive,
        setFormActive,
        ...useModals(),
        ...useChildModals()

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