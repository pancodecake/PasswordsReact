import React, { useState } from 'react'


import useGlobalContext from '../../../context/GlobalContext'

export default function PopupBtns(props) {
  const { setModalActive,setChildModalActive,modalActive,childModalActive } = useGlobalContext();
  // const { setAccordionHeadPopupActive } = usePopupContext();
  // let {setAccordionHeadPopupActive} = centeredPopup
    const {confirm,cancel,form} = props
console.log(props.className,modalActive,childModalActive,'modalActive,childModalActive');

  return (
    <div className="popup__btns">
       {form ?  <input onClick={(e) =>     props.className === 'modal-child' ?   setChildModalActive(false) : setModalActive(false) }  type="submit" className={`popup__btns__btn btn-${confirm} `} placeholder={confirm}/> 
       : <button onClick={(e) =>   props.className === 'modal-child' ?   setChildModalActive(false) : setModalActive(false)} className={`popup__btns__btn btn-${confirm} `}>{confirm}</button>}
        <button onClick={(e) =>   props.className === 'modal-child' ?   setChildModalActive(false) : setModalActive(false)} className={`popup__btns__btn btn-${cancel} `}>{cancel}</button>
    </div>
  )
}
