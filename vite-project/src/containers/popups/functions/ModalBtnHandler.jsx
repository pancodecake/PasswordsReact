import React from 'react'


export default function ModalBtnHandler(e,setPopupActive,setCurrentPopupTag,modalTag) {
    e.preventDefault()
    e.stopPropagation()
    setPopupActive(oldVal => !oldVal)
    setCurrentPopupTag(modalTag)
}
