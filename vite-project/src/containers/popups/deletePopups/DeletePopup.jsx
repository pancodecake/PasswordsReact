import React, { useId, useState,useEffect} from 'react'
import PopupBtns from '../../../components/popup/PopupBtns';
import usePopupContext from '../../../context/PopupContext';
import PopupDropAnimation from '../../../components/popup/PopupDropAnimation';
import useGlobalContext from '../../../context/GlobalContext';

 function DeletePopup({data,tag,active}) {
  const {addMultiRef} =  useGlobalContext()
  const {btns,title} =  data

    return (
      <PopupDropAnimation active={active} popupClass={'popup-delete'}>
      <div  popuptag={tag} ref={addMultiRef}  >
        <h3 className='popup__title'>{title}</h3>
        <PopupBtns  cancel={btns?.cancel} confirm={btns?.confirm} />
      </div> 
      </PopupDropAnimation>
    )
}
export default DeletePopup