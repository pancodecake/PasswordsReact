import React, { useContext, useRef, useState,useEffect } from "react";



import useBreadcrumbs from "../hooks/useBreadcrumbs";
import useSaveLocal from "../hooks/useSaveLocal";
import useModals from "../containers/modals/hooks/useModals";
import useChildModals from "../containers/modals/hooks/useChildModals";
import InitialRenderAnimation from "../functions/InitialRenderAnimation";




const MainContext = React.createContext();
export const MainProvider = ({ children }) => {
  const [formActive,setFormActive] = useState(false)
  const [formContent,setFormContent] = useSaveLocal({})
    // InitialRenderAnimation(useModals().multiRef)





 
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