import React, { useContext,useRef,useState } from 'react'

const ModalContext = React.createContext()
export const ModalContextProvider = ({children}) => {
    const [currentModal,setCurrentModal] = useState('')
    const [modal,setModal] = useState([])
    const [modalActive,setModalActive] = useState(false)
    const [modalTags,setModalTags] = useState('')
    const modalTagRef = useRef()
    const modalsRef = useRef([])

   return (
    <ModalContext.Provider value={{modalTags,setModalTags,currentModal,setCurrentModal,modal,setModal,modalActive,setModalActive,modalTagRef,modalsRef}} >
        {children}
    </ModalContext.Provider>
   ) 
}
export const useModalContext = () => {
    return useContext(ModalContext)
}
