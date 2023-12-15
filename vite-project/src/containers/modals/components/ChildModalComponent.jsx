import React, { useEffect, useId,useMemo } from 'react'
import { createPortal } from 'react-dom'
import useGlobalContext from '../../../context/GlobalContext'
import ModalBtnHandler from '../functions/ModalBtnHandler'
import DarkCover from '../../../components/DarkCover'

export default function ChildModalComponent({ modalComponents, modalData = {},btnContent }) {
    const { setChildModal, childModal, childModalTagRef,setChildModalActive,setCurrentChildModal} = useGlobalContext()
    const childModalComponentDOM = []
    const childModaltag =  []
    for (let i = 0; i < modalData.length; i++) {
        const {centered,title,...data} = modalData[i]
      childModaltag.push(useId())
      childModalTagRef.current = childModal.find(m => m.tag === childModaltag[i])
      const ChildModalComponents = modalComponents[i]
      console.log('childModalData', childModalTagRef.current);
      useEffect(() => {
        setChildModal(oldVal => ([...oldVal, { tag: childModaltag[i], active: false }]))
      }, [])
      childModalComponentDOM.push(
        <div key={i} data-modalcon={title} className={'child-modal-container'} >
       <button onClick={(e) => ModalBtnHandler(e,setChildModalActive,setCurrentChildModal,childModaltag[i])} key={i} data-modalbtn={title} className={`btn-modal ${childModalTagRef.current?.active ? 'open' : 'closed'}`} tag={childModalTagRef.current?.tag}>{btnContent.length > 1  ?  btnContent[i] :  btnContent }</button> 

       {centered ? createPortal(<ChildModalComponents dataModal={title}  className={'modal-child'} key={childModaltag[i]} active={childModalTagRef.current?.active} data={data} tag={childModalTagRef.current?.tag} />,document.body) : <ChildModalComponents dataModal={title}  className={'modal-child'} key={childModaltag[i]} active={childModalTagRef.current?.active} data={data} tag={childModalTagRef.current?.tag} />} 
    </div>
      )
    }
  
    return childModalComponentDOM
}
