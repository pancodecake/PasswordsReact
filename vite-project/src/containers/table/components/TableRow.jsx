import React, { useRef, useImperativeHandle } from "react";
import { ReactComponent as MoreSvg } from "@assets/icon-more.svg";
import useTablePassword from "../hooks/useTablePassword";
import ModalComponent from "../../modals/components/ModalComponent";



function TableRow({ ...props }, ref) {
  console.log(props.rowItems,'props.rowItems.password');
    // let {password,btns} = props.rowItems.password
    
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
         useTablePassword(props.rowItems.password?.password,props.rowItems.password?.btns)  : item }
        
         {/* {Object.keys(props.rowItems)[i] === "password" && [...svgs]} */}
       </span> 
     );
   });

  return (
    <div className="table-row ">
      <div className="table-row__con ">
        {tableTitleDOM} 
         <ModalComponent  modalComponents={props.modals} modalData={props.modalsData} btnContent={props.moreBtn} /> 
      </div>
    </div>
  );
}

export default React.forwardRef(TableRow);
