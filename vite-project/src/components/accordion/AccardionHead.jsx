import React, { useState, useId } from "react";
import { ReactComponent as Arrow } from "@assets/Up.svg";
import useGlobalContext from "../../context/GlobalContext";
import usePopupContext from "../../context/PopupContext";
import ModalBtnHandler from "../../functions/ModalBtnHandler";
import ModalComponent from "../modalComponent";

function AccardionHead(props, ref) {
  console.log(props.popupsData,props.popups,'props.popupsData,props.popups')
  const { setaccordionHeadPopupCurrentTag, setAccordionHeadPopupActive,accordionHeadPopup } = usePopupContext();
  const {setModalActive,setCurrentModal,modalTagRef} = useGlobalContext()
  // let {setaccordionHeadPopupCurrentTag, setAccordionHeadPopupActive,accordionHeadPopup,setAccordionHeadPopup,popupTagsRef} = centeredPopup

  function btnHandler(e,i) {
    // setAccordionHeadPopupActive(true);
    // setaccordionHeadPopupCurrentTag(e.currentTarget.attributes.popuptag.value)
    ModalBtnHandler(e,setModalActive,setCurrentModal)
    // if(e.currentTarget){
    //   e.currentTarget.attributes && setaccordionHeadPopupCurrentTag(e.currentTarget.attributes.popuptag.value);

    // }
  }

  return (
    <div className="accordion-head">
      <h2>{props.title}</h2>
      <div className="accordion-head__btns">
        {props.btns && props.btns.length !== 0 && (
          <div className="accordion-head__btns-con">
            <ModalComponent modalComponents={props.popups} modalData={props.popupsData} BtnSvg={props.btns} />  
            {props.btns?.map((btn, i) => {
              return (              
                <>
               {/* <button
                    key={i}
                    popuptag={modalTagRef.current?.tag}
                    onClick={(e) => btnHandler(e,i)}
                    className={`accordion-head__btns__btn btn-modal`}
                  >
                    {btn.svg}
                  </button>  */}
                
                  {/* <span
                    key={i}
                    className={`accordion-head__btns__span ${
                      props.btns?.length === 1 ? "borderless" : ""
                    }`}
                  >
                    {btn.content}
                  </span> */}
                </>
              );
            })}
            
          </div>
        )}

        <button
          onClick={(e) => props.setActive((oldValue) => !oldValue)}
          className={`accordion-arrow arrow ${props.active ? "active" : ""}`}
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
}

export default React.forwardRef(AccardionHead);
