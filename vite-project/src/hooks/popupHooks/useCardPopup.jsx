
import { useState } from 'react'
import useActivateModal from '../useActivateModal'
export default function useCardPopup() {
    const [currentCardPopupTag,setCurrentCardPopupTag] = useState('')
    const [sidePopupActive,setSidePopupActive] = useState(false)
    const [cardPopups,setCardPopups] = useState([])

    useActivateModal(sidePopupActive,setCardPopups,currentCardPopupTag,setSidePopupActive)
    return {currentCardPopupTag,setCurrentCardPopupTag,sidePopupActive,setSidePopupActive,cardPopups,setCardPopups}

}
