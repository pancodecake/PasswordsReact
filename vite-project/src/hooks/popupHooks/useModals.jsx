import React, { useState,useRef,useCallback, useMemo, useEffect } from 'react'
import useActivateModal from '../useActivateModal'
import useMultiRefs from '../useMultiRefs'
import useClosePopup from './useClosePopup'

export default function useModals() {
    const [currentModal,setCurrentModal] = useState('')
    const [modal,setModal] = useState([])
    const [modalActive,setModalActive] = useState(false)
    const modalTagRef = useRef()
    const currentPopupRef = useRef([])
    const [multiRef,addMultiRef] = useMultiRefs()
    
    useEffect(() => {
    
    console.log(multiRef(),'elements');

    },[])
    console.log(modal,'kek');
    useActivateModal(modalActive,setModal,currentModal,setModalActive,multiRef)
    useClosePopup(modalActive,setModalActive,multiRef)
     //popupActive,setPopup,currentPopupTag,setPopupActive
    return {currentPopupRef,currentModal,setCurrentModal,modal,setModal,modalActive,setModalActive,modalTagRef,addMultiRef}
}
