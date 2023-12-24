import React, { useState,useRef,useCallback, useMemo, useEffect } from 'react'
import useActivateModal from './useActivateModal'
import useMultiRefs from '../../../hooks/useMultiRefs'
import useCloseModal from './useCloseModal'

export default function useModals() {
    const [currentModal,setCurrentModal] = useState('')
    const [modal,setModal] = useState([])
    const [modalActive,setModalActive] = useState(false)
    const modalTagRef = useRef()
    const currentmodalRef = useRef([])
    const [multiRef,addMultiRef] = useMultiRefs()
    const [darkCoverActive,setDarkCoverActive] = useState(false)
  

    useActivateModal(modalActive,setModal,currentModal,multiRef)
    useCloseModal(modalActive,setModalActive,multiRef)
     //modalActive,setmodal,currentmodalTag,setmodalActive
    return {darkCoverActive,setDarkCoverActive,currentmodalRef,currentModal,setCurrentModal,modal,setModal,modalActive,setModalActive,modalTagRef,addMultiRef,multiRef}
}
