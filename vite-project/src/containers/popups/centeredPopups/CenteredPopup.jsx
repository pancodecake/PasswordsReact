import React, { useEffect, useState,useId } from "react";
import { ReactComponent as X } from "@assets/X.svg";
import useGlobalContext from "../../../context/GlobalContext";
import useFormData from "../../../hooks/useFormData";
import usePopupContext from "../../../context/PopupContext";
import FormComp from "../../../components/FormComp";
import PopupDropAnimation from "../../../components/popup/PopupDropAnimation";
import PopupBtns from "../../../components/popup/PopupBtns";

export default function CenteredPopup({data,tag,active}) {
  const {formContent,setFormContent,currentPopupRef,addMultiRef,setModalActive} = useGlobalContext()
  // const {setAccordionHeadPopupActive} = usePopupContext()
  if (data) {
    //inputs, btns,, title, ...rest
    const { inputs,btns,centered, title, ...rest } = data 
    console.log(rest,'rest');
    const restDOM = Object.values(rest).map((el,i) => {
      return (<li key={i} className="form__item">{el}</li>)
    })
    const popInputsDOM = inputs?.map((input,i) => {
      return (
        <li key={i} className="form__item">
          <label htmlFor={input.name}>{input.name}</label>
          <input
            onChange={(e) =>
              useFormData(setFormContent,input.name,e.target.value)
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
        <div popuptag={tag} ref={addMultiRef} >
        {/* <div popup={param.tag} ref={ref} className={`popup-centered center popup ${accordionHeadPopupActive ? "open" : "closed"}`}> */}
          <div className="popup-centered-container">
            <button
              onClick={() => setModalActive(false)}
              className="popup-centered-close"
            >
              <X />
            </button>
            <h2 className="popup__title">{title}</h2>
            <FormComp btns={<PopupBtns  form={true} cancel={btns?.cancel}  confirm={btns?.confirm} />} inputs={popInputsDOM} rest={restDOM} />
            {/* <form onSubmit={(e) => formHandeler(e)} className="popup-centered-form">
              <ul className="popup-centered-form__list">
                <li className="popup-centered-form__item">
                  <label htmlFor="popup-centered-input-name">
                    Name
                  </label>
                  <input
                    onChange={(e) =>
                      setFormContent((oldVal) => ({
                        ...oldVal,
                        Name: e.target.value,
                      }))
                    }
                    className="popup-centered-input"
                    id="popup-centered-input-name"
                    type="text"
                    value={formContent.Name}
                  />
                </li>
                {popInputsDOM}
                {restDOM} 
              </ul>
            
              
            </form> */}
          </div>
        </div>
      </PopupDropAnimation>
      }
      </>
    );
}
}

