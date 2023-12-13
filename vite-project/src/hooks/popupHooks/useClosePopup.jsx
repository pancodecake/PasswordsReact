import React, { useEffect } from 'react'
import useGlobalContext from '../../context/GlobalContext'
import usePreventDoubleRenderEffect from '../usePreventDoubleRenderEffect'


export default function useClosePopup(popupActive, setPopupActive,multiRef) {
  //global cant be in global

  usePreventDoubleRenderEffect(() => {
    const elements = multiRef()

    const handler = (event) => {
      event.stopPropagation()
      event.preventDefault()
      event.target.closest('.popup') !== null && event.preventDefault()
      console.log( event.target.closest('.popup') !== null && event.target,'event.target');
  //  return elements.every(popRef => !popRef?.contains(event.target) && event.target.closest('.popup') === null && event.target.closest('.btn-modal') === null) && setPopupActive(false) + console.log('closed');
      return event.target.closest('.popup') === null && event.target.closest('.btn-modal') === null && setPopupActive(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [popupActive])

}
