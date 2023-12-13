import React, { useEffect, useState,useId } from "react";
import { ReactComponent as X } from "@assets/X.svg";
import useGlobalContext from "../../../context/GlobalContext";
import useFormData from "../../../hooks/useFormData";

import FormComp from "../../../components/FormComp";
import PopupDropAnimation from "../components/PopupDropAnimation";
import PopupBtns from "../components/PopupBtns";
import DarkCover from "../../../components/DarkCover";

export default function CenteredPopup({data,tag,active,dataModal,className}) {
  const {formContent,setFormContent,currentPopupRef,addMultiRef,setModalActive,setChildModalActive} = useGlobalContext()
 
  if (data) {
    const { inputs,btns,centered, title, ...rest } = data 

    const restDOM = Object.values(rest).map((el,i) => {
      return (<li key={i} className="form__item">{el}</li>)
    })
    const popInputsDOM = inputs?.map((input,i) => {
      return (
        <li key={i} className="form__item">
          <label htmlFor={input.name}>{input.name}</label>
          <input
            onChange={(e) =>
              useFormData(setFormContent,input.name,e.target.value,e.target.type)
            }
            className="popup-centered-input" 
            id={input.name}
            type={input.type}
            value={formContent[input.name]}
          />
        </li>
      );
    });
    return (
      <>
      {
        <PopupDropAnimation popupClass={'popup-centered'} active={active}>
         
        <div className={`popup-centered center popup ${className}`} data-modal={dataModal} popuptag={tag} ref={addMultiRef} >
       
          <div className="popup-centered-container">
            <button
              onClick={() =>    className === 'modal-child' ?   setChildModalActive(false) : setModalActive(false)}
              className="popup-centered-close"
            >
              <X />
            </button>
            <h2 className="popup__title">{dataModal}</h2>
            <FormComp btns={<PopupBtns className={className} form={true} cancel={btns?.cancel}  confirm={btns?.confirm} />} inputs={popInputsDOM} rest={restDOM} />
          </div>
        </div>
      
      </PopupDropAnimation>
      }
      </>
    );
}
}

