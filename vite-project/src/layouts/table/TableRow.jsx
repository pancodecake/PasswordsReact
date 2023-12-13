import React, { useRef, useImperativeHandle } from "react";
import { ReactComponent as MoreSvg } from "@assets/icon-more.svg";
import useTablePassword from "../../hooks/useTablePassword";
import ModalComponent from "../../components/modalComponent";


function TableRow({ ...props }, ref) {
    let {password,btns} = props.rowItems.password
    
   const tableTitleDOM = Object.values(props.rowItems).map((item, i) => {
     let passwordWidth =  ref.current[i]?.id === 'password' && ref.current[i].getBoundingClientRect().width;
     return (     
       <span
         id={Object.keys(props.rowItems)[i]}
         ref={(el) => (ref.current[i] = el)}
         className="table-row__item"
         key={item}
         style={{width:item['password'] ? passwordWidth : ''}}
       >
         {item['password'] ? 
         useTablePassword(password,btns)  : item }
        
         {/* {Object.keys(props.rowItems)[i] === "password" && [...svgs]} */}
       </span> 
     );
   });

  return (
    <div className="table-row ">
      <div className="table-row__con ">
        {tableTitleDOM} 
         <ModalComponent  modalComponents={props.popups} modalData={props.popupsData} btnContent={props.moreBtn} /> 
        {/* <button className="btn-modal">
        {props.moreBtn}
        </button> */}
      </div>
    </div>
  );
}

export default React.forwardRef(TableRow);
