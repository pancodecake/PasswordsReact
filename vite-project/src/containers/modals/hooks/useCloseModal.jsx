import React, { useEffect } from 'react'
import useGlobalContext from '../../../context/GlobalContext'
import usePreventDoubleRenderEffect from '../../../hooks/usePreventDoubleRenderEffect'


export default function useCloseModal(modalActive, setmodalActive,multiRef) {

  usePreventDoubleRenderEffect(() => {
 
    const handler = (event) => {
      event.stopPropagation()
      event.preventDefault()
      event.target.closest('.modal') !== null && event.preventDefault()
      return event.target.closest('.modal') === null && event.target.closest('.btn-modal') === null && setmodalActive(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [modalActive])

}
