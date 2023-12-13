import React, { useImperativeHandle } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Arrow } from "@assets/Up.svg";
import useGlobalContext from "../../../context/GlobalContext";
import { avabilePagesData } from "../../../data/accordionData";

function PrevLocation(props,ref) {
  const { useBreadcrumbs } = useGlobalContext();
  const headerigate = useNavigate();
  const location = useBreadcrumbs();
  const prevPageIndex = avabilePagesData.indexOf(location) - 1



  return (
    <button onClick={() =>  headerigate(-1)} className="header-pages__prev">
   
        <Arrow />
 
      <h3 ref={ref} className="header-pages__prev__title">{avabilePagesData[prevPageIndex]}</h3>
      {/* <h3>{prevLocationRef.current}</h3> */}
    </button>
  );
}
export default React.forwardRef(PrevLocation);
