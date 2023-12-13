import React, { useState,useRef,useCallback, useMemo, useEffect } from 'react'
import useActivateModal from './useActivateModal'
import useMultiRefs from '../../../hooks/useMultiRefs'
import useClosePopup from './useClosePopup'

export default function useModals() {
    const [currentModal,setCurrentModal] = useState('')
    const [modal,setModal] = useState([])
    const [modalActive,setModalActive] = useState(false)
    const modalTagRef = useRef()
    const currentPopupRef = useRef([])
    const [multiRef,addMultiRef] = useMultiRefs()
    console.log(multiRef(),'multiRef');

    useActivateModal(modalActive,setModal,currentModal,multiRef)
    useClosePopup(modalActive,setModalActive,multiRef)
     //popupActive,setPopup,currentPopupTag,setPopupActive
    return {currentPopupRef,currentModal,setCurrentModal,modal,setModal,modalActive,setModalActive,modalTagRef,addMultiRef}
}
