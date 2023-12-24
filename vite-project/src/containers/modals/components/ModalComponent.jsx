import React, { useEffect, useId, } from 'react'
import { createPortal } from 'react-dom';
import DarkCover from '../../../components/DarkCover';
import ModalBtnHandler from '../functions/ModalBtnHandler';
import useGlobalContext from '../../../context/GlobalContext';





export default function ModalComponent({ modalComponents, modalData = {}, btnContent }) {
  const { setModal, modal, modalTagRef, setModalActive, setCurrentModal } = useGlobalContext()
  const modalComponentDOM = []

  for (let i = 0; i < modalData.length; i++) {
    const { containerless, centered, title, ...data } = modalData[i]
    const currentModaltag = useId();
    modalTagRef.current = modal.find(m => m.tag === currentModaltag)
    const ModalComponents = modalComponents[i]

    useEffect(() => {
      setModal(oldVal => ([...oldVal, { tag: currentModaltag, active: false }]))
    }, [currentModaltag]) // Include currentModaltag as a dependency

    modalComponentDOM.push(
      <div key={currentModaltag} data-modalcon={title} className={containerless ? '' : 'modal-container'}>
        <button
          onClick={(e) => ModalBtnHandler(e, setModalActive, setCurrentModal, currentModaltag)}
          data-modalbtn={title}
          className={`btn-modal ${modalTagRef.current?.active ? 'open' : 'closed'}`}
          tag={modalTagRef.current?.tag}
        >
          {btnContent.length > 1 ? btnContent[i] : btnContent}
        </button>
        {centered ?
            
              
          createPortal(
            <ModalComponents
              className={'modal-main'}
              dataModal={title}
              key={currentModaltag}
              active={modalTagRef.current?.active}
              data={data}
              tag={modalTagRef.current?.tag}
            />,
            document.body
          )
          :
          <ModalComponents
            className={'modal-main'}
            dataModal={title}
            key={currentModaltag}
            active={modalTagRef.current?.active}
            data={data}
            tag={modalTagRef.current?.tag}
          />
        }
      </div>
    )
  }

  return modalComponentDOM
}
