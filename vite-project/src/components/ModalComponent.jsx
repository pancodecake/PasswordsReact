import React, { useEffect, useId, useTransition, useCallback } from 'react'
import useGlobalContext from '../context/GlobalContext'
import ModalBtnHandler from '../functions/ModalBtnHandler'
import useActivateModal from '../hooks/useActivateModal'

export let modalsTags = Date.now()
export default function ModalComponent({ modalComponents, modalData,BtnSvg }) {
  const { setModal, modal, modalTagRef,setModalActive,setCurrentModal } = useGlobalContext()
  const modalComponentDOM = []
  const modaltag =  []
  for (let i = 0; i < modalData.length; i++) {
    modaltag.push(useId())
    console.log(Array.isArray(BtnSvg),BtnSvg[i] ,'typeof BtnSvg === ');
    modalTagRef.current = modal.find(m => m.tag === modaltag[i])
    const ModalComponents = modalComponents[i]
    console.log(ModalComponents, modalData[i], 'modalComponents,modalData', BtnSvg);
    useEffect(() => {
      setModal(oldVal => ([...oldVal, { tag: modaltag[i], active: false }]))
    }, [])
    modalComponentDOM.push(
      <div className={modalData[i].centered ?   '' : 'modal-container'} >
         <button onClick={(e) => ModalBtnHandler(e,setModalActive,setCurrentModal,modaltag[i])} className='btn-modal' tag={modalTagRef.current?.tag}>{BtnSvg.length > 1  ?  BtnSvg[i] :  BtnSvg }</button> 
         <ModalComponents key={modaltag[i]} active={modalTagRef.current?.active} data={modalData[i]} tag={modalTagRef.current?.tag} /> 
      </div>
    )
  }

  return modalComponentDOM
}
