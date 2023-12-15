import React from 'react'


import ChecklistModal from '../../modals/checklistModals/ChecklistModal'
import { ChecklistsModalData, settingsmodalData } from '../../../data/modalsData'
import ModalComponent from '../../modals/components/ModalComponent'
import SideModal from '../../modals/SideModals/SideModal'

export default function HeaderModals(modal,btnContent) {

    switch (modal) {
        case 'settings': return <ModalComponent key={modal}  modalComponents={[SideModal]} modalData={[settingsmodalData]} btnContent={btnContent}/> 
        case 'inviteChecklist':return  <ModalComponent key={modal}  modalComponents={[ChecklistModal]} modalData={[ChecklistsModalData.inviteed]} btnContent={btnContent}/>                    
        case 'accessChecklist':return  <ModalComponent key={modal}  modalComponents={[ChecklistModal]} modalData={[ChecklistsModalData.allowAccess]} btnContent={btnContent}/>  
    }
}
