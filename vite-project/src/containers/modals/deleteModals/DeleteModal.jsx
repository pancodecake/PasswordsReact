import React, { useRef} from 'react'


import DarkCover from "../../../components/DarkCover";
import ModalBtns from "../components/modalBtns";
import ModalDropAnimation from "../components/ModalDropAnimation";
import useGlobalContext from '../../../context/GlobalContext';


 function DeleteModal({data,tag,active,dataModal,className}) {
  const deleteModalRef = useRef()

  const {btns} =  data
 
    return (
      <ModalDropAnimation active={active} modalClass={'modal-delete'}>
      <div className={`modal-centered center modal ${className}`} data-modal={dataModal}  modaltag={tag}   >
        <h3 className='modal__title'>{dataModal}</h3>
        <ModalBtns className={className}  cancel={btns?.cancel} confirm={btns?.confirm} />
      </div> 
      </ModalDropAnimation>
    )
}
export default DeleteModal