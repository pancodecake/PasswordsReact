import React, { useId, useState,useEffect} from 'react'
import PopupBtns from '../components/PopupBtns';

import PopupDropAnimation from '../components/PopupDropAnimation';
import useGlobalContext from '../../../context/GlobalContext';
import DarkCover from '../../../components/DarkCover';

 function DeletePopup({data,tag,active,dataModal,className}) {
  const {addMultiRef} =  useGlobalContext()
  const {btns} =  data
  
    return (
      <PopupDropAnimation active={active} popupClass={'popup-delete'}>
      <div className={`popup-centered center popup ${className}`} data-modal={dataModal}  popuptag={tag} ref={addMultiRef}  >
        <h3 className='popup__title'>{dataModal}</h3>
        <PopupBtns className={className}  cancel={btns?.cancel} confirm={btns?.confirm} />
      </div> 
      </PopupDropAnimation>
    )
}
export default DeletePopup