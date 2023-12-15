import React from 'react'


export default function ModalBtnHandler(e,setmodalActive,setCurrentmodalTag,modalTag) {
    e.preventDefault()
    e.stopPropagation()
    setmodalActive(oldVal => !oldVal)
    setCurrentmodalTag(modalTag)
}
