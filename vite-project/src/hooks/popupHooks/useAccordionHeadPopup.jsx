import React, { useState } from 'react'
import useActivateModal from '../useActivateModal';

export default function useAccordionHeadPopup() {
    const [accordionHeadPopupActive, setAccordionHeadPopupActive] = useState(false);
    const [accordionHeadPopupCurrentTag, setaccordionHeadPopupCurrentTag] = useState();
    const [accordionHeadPopup,setAccordionHeadPopup] = useState([])
    useActivateModal(accordionHeadPopupActive,setAccordionHeadPopup,accordionHeadPopupCurrentTag,setAccordionHeadPopupActive)
     return {accordionHeadPopup,setAccordionHeadPopup,accordionHeadPopupActive,setAccordionHeadPopupActive,accordionHeadPopupCurrentTag,setaccordionHeadPopupCurrentTag}
    // return {state,setState}
}
