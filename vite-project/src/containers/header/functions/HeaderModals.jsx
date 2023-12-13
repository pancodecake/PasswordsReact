import React from 'react'

import SidePopup from '../../popups/sidePopups/SidePopup'
import ChecklistModal from '../../../components/ChecklistModal'
import { ChecklistsModalData, settingsPopupData } from '../../../data/popupsData'
import ModalComponent from '../../popups/components/ModalComponent'

export default function HeaderModals(modal,btnContent) {

    switch (modal) {
        case 'settings': return <ModalComponent key={modal}  modalComponents={[SidePopup]} modalData={[settingsPopupData]} btnContent={btnContent}/> 
        case 'inviteChecklist':return  <ModalComponent key={modal}  modalComponents={[ChecklistModal]} modalData={[ChecklistsModalData.inviteed]} btnContent={btnContent}/>                    
        case 'accessChecklist':return  <ModalComponent key={modal}  modalComponents={[ChecklistModal]} modalData={[ChecklistsModalData.allowAccess]} btnContent={btnContent}/>  
    }
}
