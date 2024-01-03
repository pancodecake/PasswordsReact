
import { ReactComponent as SideSetting } from "@assets/sideSetting.svg";
import { ReactComponent as DoubleArrow } from "@assets/doublearrow.svg";
import { ReactComponent as Bin } from "@assets/bin.svg";
import { ReactComponent as Chain } from "@assets/chain.svg";
import { ReactComponent as Key } from "@assets/key.svg";
import { ReactComponent as Dots } from "@assets/dots.svg"
import { ReactComponent as Documentplus } from "@assets/documentplus.svg";

import Textarea from "../components/Textarea";
import SelectInputComp from "../components/SelectInputComp";
import SideModal from "../containers/modals/SideModals/SideModal";
import DeleteModal from "../containers/modals/DeleteModals/DeleteModal";
import DropBox from "../containers/dropbox/DropBox";
import CenteredModal from "../containers/modals/centeredModals/CenteredModal";

//inputs,btns, title
export const  CenteredModalData = {
    addProject:{centered:true,title:'Add project',inputs:[{type:'text',name:'Name'}],description:Textarea,select:SelectInputComp,dropBox:DropBox,btns:{confirm:'Add',cancel:'Cancel'}},
    redactProject:{centered:true,title:'Redact project',inputs:[{type:'text',name:'Name'}],description:Textarea,select:SelectInputComp,btns:{confirm:'Change',cancel:'Cancel'}},
    createPassword:{centered:true,title:'Create password',inputs:[{type:'text',name:'Name'},{type:'email',name:'Login'},{type:'password',name:'Password'},{type:'text',name:'URL'}],description:Textarea,btns:{confirm:'Create',cancel:'Cancel'}},
    redactPassword: {centered:true,title:'Redact password',inputs:[{type:'text',name:'Name'},{type:'password',name:'Password'},{type:'text',name:'URL'}],description:Textarea,select:SelectInputComp,btns:{confirm:'Change',cancel:'Cancel'}},
    createCategory: {centered:true,title:'Create category',inputs:[{type:'text',name:'Name'}],description:Textarea,select:SelectInputComp,btns:{confirm:'Save',cancel:'Cancel'}},
    redactCategory: {centered:true,title:'Create category',inputs:[{type:'text',name:'Name'}],description:Textarea,select:SelectInputComp,btns:{confirm:'Change',cancel:'Cancel'}},
    createSection: {centered:true,title:'Create section',inputs:[{type:'text',name:'Name'}],select:SelectInputComp,btns:{confirm:'Create'}},
    dltSection:{centered:true,title:'Are you sure you wana delete the section',btns:{confirm:'CONFIRM',cancel:'CANCEL'}},
    dltProject:{centered:true,title:'Are you sure you wana delete the project',btns:{confirm:'CONFIRM',cancel:'CANCEL'}},
    dltPassword:{centered:true,title:'Are you sure you wana delete the password',btns:{confirm:'CONFIRM',cancel:'CANCEL'}}
  };
// export const CenteredModalData = {
//     dltSection:{tag:'dltSection',active:false,title:'Are you sure you wana delete the section',btns:{confirm:'CONFIRM',cancel:'CANCEL'}},
//     dltProject:{tag:'dltProject',active:false,title:'Are you sure you wana delete the project',btns:{confirm:'CONFIRM',cancel:'CANCEL'}},
//     dltPassword:{tag:'dltPassword',active:false,title:'Are you sure you wana delete the password',btns:{confirm:'CONFIRM',cancel:'CANCEL'}}
//   }

 export const SideModalData = {
   cardMove: {
     
    title: 'Card move',
     mySections: { title: 'My sections' },
     withoutSections: { title: 'Without sections' }
   },
   settingsMove: {
     
    title: 'Settings move',
     activeProjects: { title: 'Active projects', svg: <Dots /> },
     myProjects: { title: 'My projects', svg: <Dots /> },
     unactiveProjects: { title: 'Unactive projects', svg: <Dots /> }
   }, 
   tableMove: {
     
    title:'Table move',
     passwords: { title: 'Passwords' },
     untiedPasswords: { title: 'Passwords without a tie to the cathegory' },
   }, 
   tablePasswords: {
     
    title:'Table passwords',
     passwords: { title: 'Active projects' },
     accessingSSH: { title: 'Accessing the site trough SSH' },
     website: { title: 'Website' },
   }
 }

   export const projectCardmodalData = {
    title:'Project card',
    
     redact:{svg:<SideSetting/>,title:'Redact',childmodals:{modalsData:[CenteredModalData.redactProject],modals:[CenteredModal]}},
     move:{svg:<DoubleArrow/>,title:'Move',childmodals:{modalsData:[SideModalData.cardMove],modals:[SideModal]}},
     delete:{svg:<Bin/>,title:'Delete',childmodals:{modalsData:[CenteredModalData.dltProject],modals:[DeleteModal]}},
   }
   export const SSHCardmodalData = {
    title:'SSH card',
    
     redact:{svg:<SideSetting/>,title:'Redact',childmodals:{modalsData:[CenteredModalData.redactCategory],modals:[CenteredModal]}},
     delete:{svg:<Bin/>,title:'Delete',childmodals:{modalsData:[CenteredModalData.dltProject],modals:[DeleteModal]}},
   }
   export const settingsmodalData = {
    title:'settings',
    
    move:{svg:<DoubleArrow/>,title:'Move',childmodals:{modalsData:[SideModalData.settingsMove],modals:[SideModal]}},
    createSection:{svg:<Documentplus/>,title:'Create section',childmodals:{modalsData:[CenteredModalData.createSection],modals:[CenteredModal]}},
  
  }
  export const ChecklistsModalData = {
    inviteed:{
        containerless:true,
        title:'Invite To Project',
        list:['Joe Doe','Matt Patt','Markiplayer Example','Felix Kindelberg','Seymen Satilmaz'],
        btns:{confirm:'Save',cancel:'Cancel'}
    },
    allowAccess:{
      containerless:true,
        title:'Allow Access',
        list:['Joe Doe','Matt Patt','Markiplayer Example','Felix Kindelberg','Seymen Satilmaz'],
        btns:{confirm:'Save',cancel:'Cancel'}
    }
  }
   export const tablemodalData = {
    title:'table',
     move:{svg:<DoubleArrow/>,title:'Move',childmodals:{modalsData:[SideModalData.tableMove],modals:[SideModal]}},
     tie:{svg:<Chain/>,title:'Tie to a category',childmodals:{modalsData:[SideModalData.tablePasswords],modals:[SideModal]}},
     redact:{svg:<Key/>,title:'Redact password',childmodals:{modalsData:[CenteredModalData.redactPassword],modals:[CenteredModal]}},
     delete:{svg:<Bin/>,title:'Delete',childmodals:{modalsData:[CenteredModalData.dltPassword],modals:[DeleteModal]}},
   }
  
  
  export const copupData = {
    settings: {},
  }