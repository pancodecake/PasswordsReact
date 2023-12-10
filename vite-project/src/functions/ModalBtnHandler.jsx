import React from 'react'


export default function ModalBtnHandler(e,setPopupActive,setCurrentPopupTag,modalTag) {
    // console.log(modalTag,'lmao',e.currentTarget.attributes.popuptag.value);
    console.log(modalTag,'modalTag');
    e.preventDefault()
    setPopupActive(oldVal => !oldVal)
    setCurrentPopupTag(modalTag)
}
