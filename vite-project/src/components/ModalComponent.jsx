import React, { useEffect, useId, useTransition, useCallback,useMemo } from 'react'
import useGlobalContext from '../context/GlobalContext'
import ModalBtnHandler from '../functions/ModalBtnHandler'
import { createPortal } from 'react-dom';
import DarkCover from './DarkCover';

export let modalsTags = Date.now()
export default function ModalComponent({ modalComponents, modalData = {},btnContent }) {
  const { setModal, modal, modalTagRef,setModalActive,setCurrentModal} = useGlobalContext()
  const modalComponentDOM = []
  const modaltag =  []
  for (let i = 0; i < modalData.length; i++) {
    const {containerless,centered,title,...data} = modalData[i]
    modaltag.push(useId())
    console.log(Array.isArray(btnContent),btnContent[i] ,'typeof btnContent === ');
    modalTagRef.current = modal.find(m => m.tag === modaltag[i])
    const ModalComponents = modalComponents[i]
 
  useEffect(() => {
      setModal(oldVal => ([...oldVal, { tag: modaltag[i], active: false }]))
    }, [])
    modalComponentDOM.push(
      <div data-modalCon={title} className={containerless ? '' : 'modal-container'} >
         <button onClick={(e) => ModalBtnHandler(e,setModalActive,setCurrentModal,modaltag[i])} data-modalBtn={title} className={`btn-modal ${modalTagRef.current?.active ? 'open' : 'closed'}`} tag={modalTagRef.current?.tag}>{btnContent.length > 1  ?  btnContent[i] :  btnContent }</button> 
       {centered ?
        createPortal(<ModalComponents dataModal={title} key={modaltag[i]} active={modalTagRef.current?.active} data={data} tag={modalTagRef.current?.tag} /> ,document.body)
        : <ModalComponents dataModal={title} key={modaltag[i]} active={modalTagRef.current?.active} data={data} tag={modalTagRef.current?.tag} /> } 
      </div>
    )
  }

  return modalComponentDOM
}
