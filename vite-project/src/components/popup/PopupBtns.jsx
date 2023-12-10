import React, { useState } from 'react'

import usePopupContext from '../../context/PopupContext'
import useGlobalContext from '../../context/GlobalContext'

export default function PopupBtns(props) {
  const { setModalActive } = useGlobalContext();
  // const { setAccordionHeadPopupActive } = usePopupContext();
  // let {setAccordionHeadPopupActive} = centeredPopup
    const {confirm,cancel,form} = props


  return (
    <div className="popup__btns">
       {form ?  <input onClick={() =>  setModalActive(false) }  type="submit" className={`popup__btns__btn btn-${confirm} `} placeholder={confirm}/> 
       : <button onClick={() => setModalActive(true)} className={`popup__btns__btn btn-${confirm} `}>{confirm}</button>}
        <button onClick={() => setModalActive(false)} className={`popup__btns__btn btn-${cancel} `}>{cancel}</button>
    </div>
  )
}
