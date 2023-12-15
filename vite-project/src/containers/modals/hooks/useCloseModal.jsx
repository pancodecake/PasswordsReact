import React, { useEffect } from 'react'
import useGlobalContext from '../../../context/GlobalContext'
import usePreventDoubleRenderEffect from '../../../hooks/usePreventDoubleRenderEffect'


export default function useCloseModal(modalActive, setmodalActive,multiRef) {
  //global cant be in global
  useEffect(() => {
    const elements = multiRef();
    console.log(elements,'elements');
    // Add the 'initial-render' class to each element in the array
    elements.forEach((element) => {
      element.classList.add('initial-render');
    });

    // Remove the 'initial-render' class after a short delay
    const timeoutId = setTimeout(() => {
      elements.forEach((element) => {
        element.classList.remove('initial-render');
      });
    }, 100); // Adjust the delay as needed

    // Cleanup on unmount
    return () => clearTimeout(timeoutId);
  }, []);
  usePreventDoubleRenderEffect(() => {
 
    const handler = (event) => {
      event.stopPropagation()
      event.preventDefault()
      event.target.closest('.modal') !== null && event.preventDefault()
      console.log( event.target.closest('.modal') !== null && event.target,'event.target');
  //  return elements.every(popRef => !popRef?.contains(event.target) && event.target.closest('.modal') === null && event.target.closest('.btn-modal') === null) && setmodalActive(false) + console.log('closed');
      return event.target.closest('.modal') === null && event.target.closest('.btn-modal') === null && setmodalActive(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [modalActive])

}
