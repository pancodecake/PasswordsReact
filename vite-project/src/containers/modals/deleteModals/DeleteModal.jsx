import React, { useRef,useEffect} from 'react'

import DarkCover from "../../../components/DarkCover";
import ModalDropAnimation from "../components/ModalDropAnimation";
import useGlobalContext from '../../../context/GlobalContext';
import ModalBtns from '../components/ModalBtns';


 function DeleteModal({data,tag,active,dataModal,className}) {
  const {setDarkCoverActive} = useGlobalContext()
  const centeredModalRef = useRef()
  useEffect(() => {
    setDarkCoverActive(active)
  },[active])

  const {btns} =  data
 
    return (
      <ModalDropAnimation centeredModalRef={centeredModalRef} active={active} modalClass={'modal-delete'}>
      <div className={`modal-centered  ${active ? 'open' : ''}  modal ${className}`} data-modal={dataModal}  modaltag={tag}   >
        <h3 className='modal__title'>{dataModal}</h3>
        <ModalBtns className={className}  cancel={btns?.cancel} confirm={btns?.confirm} />
      </div> 
      </ModalDropAnimation>
    )
}
export default DeleteModal