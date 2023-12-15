import React, { useRef, useState } from 'react'
import useMultiRefs from '../../../hooks/useMultiRefs'
import useActivateModal from './useActivateModal'
import useCloseModal from './useCloseModal'

export default function useChildModals() {
    const [currentChildModal,setCurrentChildModal] = useState('')
    const [childModal,setChildModal] = useState([])
    const [childModalActive,setChildModalActive] = useState(false)
    const childModalTagRef = useRef()
    const currentChildModalRef = useRef([])
    const [multiRef,addMultiRef] = useMultiRefs()
    console.log(childModal,'kek',childModalActive);
    useActivateModal(childModalActive,setChildModal,currentChildModal,multiRef)
    useCloseModal(childModalActive,setChildModalActive,multiRef)

    return {currentChildModalRef,currentChildModal,setCurrentChildModal,childModal,setChildModal,childModalActive,setChildModalActive,childModalTagRef,addMultiRef}
}
