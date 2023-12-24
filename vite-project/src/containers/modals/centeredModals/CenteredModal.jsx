import React, { useEffect, useState,useId, useRef } from "react";
import { ReactComponent as X } from "@assets/X.svg";
import useGlobalContext from "../../../context/GlobalContext";
import useFormData from "../../../hooks/useFormData";
import FormComp from "../../../components/FormComp";
import DarkCover from "../../../components/DarkCover";

import ModalDropAnimation from "../components/ModalDropAnimation";
import ModalBtns from "../components/ModalBtns";


export default function CenteredModal({data,tag,active,dataModal,className}) {
  const {formContent,setFormContent,setModalActive,setChildModalActive,setDarkCoverActive} = useGlobalContext()

  useEffect(() => {
    setDarkCoverActive(active)
  },[active])
  if (data) {
    const { inputs,btns,centered, title, ...rest } = data 
    const restDOM = Object.values(rest).map((el,i) => {
      return (<li key={i} className="form__item">{el}</li>)
    })
    const popInputsDOM = inputs?.map((input,i) => {
      const labelId = useId()
      return (
        <li key={i} className="form__item">
          <label htmlFor={input.name + labelId}>{input.name}</label>
          <input
            onChange={(e) =>
            
              useFormData(setFormContent,input.name + labelId,e.target.value,e.target.type)
            }
            className="modal-centered-input" 
            id={input.name + labelId}
            type={input.type}
            value={formContent[input.name + labelId]}
          />
        </li>
      );
    });
    return (
      <>
      {
        <ModalDropAnimation modalClass={'modal-centered'} active={active}>
        
        <div className={`modal-centered ${active ? 'open' : ''}  modal ${className}`} data-modal={dataModal} modaltag={tag}  >
       
          <div className="modal-centered-container">
            <button
              onClick={() => className === 'modal-child' ?   setChildModalActive(false) : setModalActive(false)}
              className="modal-centered-close"
            >
              <X />
            </button>
            <h2 className="modal__title">{dataModal}</h2>
            
            <FormComp  btns={<ModalBtns className={className} form={true} cancel={btns?.cancel}  confirm={btns?.confirm} />} inputs={popInputsDOM} rest={restDOM} />
        
          </div>
        </div>
      
      </ModalDropAnimation>

      }
      </>
    );
}
}

