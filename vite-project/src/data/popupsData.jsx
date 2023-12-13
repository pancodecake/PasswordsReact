
import { ReactComponent as SideSetting } from "@assets/sideSetting.svg";
import { ReactComponent as DoubleArrow } from "@assets/doublearrow.svg";
import { ReactComponent as Bin } from "@assets/bin.svg";
import { ReactComponent as Chain } from "@assets/chain.svg";
import { ReactComponent as Key } from "@assets/key.svg";
import { ReactComponent as Dots } from "@assets/dots.svg"
import { ReactComponent as Documentplus } from "@assets/documentplus.svg";

import Textarea from "../components/Textarea";
import SelectInputComp from "../components/SelectInputComp";
import SidePopup from "../containers/popups/sidePopups/SidePopup";
import CenteredPopup from "../containers/popups/centeredPopups/CenteredPopup";
import DeletePopup from "../containers/popups/deletePopups/DeletePopup";

//inputs,btns, title
export const  centeredPopupData = {
    addProject:{centered:true,title:'Add project',inputs:[{type:'text',name:'Name'}],description:<Textarea  label={'Description'}/>,select:<SelectInputComp/>,btns:{confirm:'Add',cancel:'Cancel'}},
    redactProject:{centered:true,title:'Redact project',inputs:[{type:'text',name:'Name'}],description:<Textarea  label={'Description'}/>,select:<SelectInputComp/>,btns:{confirm:'Change',cancel:'Cancel'}},
    createPassword:{centered:true,title:'Create password',inputs:[{type:'text',name:'Name'},{type:'email',name:'Login'},{type:'password',name:'Password'},{type:'text',name:'URL'}],description:<Textarea  label={'Description'}/>,btns:{confirm:'Create',cancel:'Cancel'}},
    redactPassword: {centered:true,title:'Redact password',inputs:[{type:'text',name:'Name'},{type:'password',name:'Password'},{type:'text',name:'URL'}],description:<Textarea  label={'Description'}/>,select:<SelectInputComp/>,btns:{confirm:'Change',cancel:'Cancel'}},
    createCategory: {centered:true,title:'Create category',inputs:[{type:'text',name:'Name'}],description:<Textarea  label={'Description'}/>,select:<SelectInputComp/>,btns:{confirm:'Save',cancel:'Cancel'}},
    redactCategory: {centered:true,title:'Create category',inputs:[{type:'text',name:'Name'}],description:<Textarea  label={'Description'}/>,select:<SelectInputComp/>,btns:{confirm:'Change',cancel:'Cancel'}},
    createSection: {centered:true,title:'Create section',inputs:[{type:'text',name:'Name'}],select:<SelectInputComp/>,btns:{confirm:'Create'}},
    dltSection:{centered:true,title:'Are you sure you wana delete the section',btns:{confirm:'CONFIRM',cancel:'CANCEL'}},
    dltProject:{centered:true,title:'Are you sure you wana delete the project',btns:{confirm:'CONFIRM',cancel:'CANCEL'}},
    dltPassword:{centered:true,title:'Are you sure you wana delete the password',btns:{confirm:'CONFIRM',cancel:'CANCEL'}}
  };
// export const centeredPopupData = {
//     dltSection:{tag:'dltSection',active:false,title:'Are you sure you wana delete the section',btns:{confirm:'CONFIRM',cancel:'CANCEL'}},
//     dltProject:{tag:'dltProject',active:false,title:'Are you sure you wana delete the project',btns:{confirm:'CONFIRM',cancel:'CANCEL'}},
//     dltPassword:{tag:'dltPassword',active:false,title:'Are you sure you wana delete the password',btns:{confirm:'CONFIRM',cancel:'CANCEL'}}
//   }

 export const sidePopupData = {
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
// export const sidePopupData = {
//   cardMove: {title: ['My sections','Without sections']},
//   settingsMove: {title: ['Active projects'], svg:[ <Dots />]
//     // activeProjects: { title: 'Active projects', svg: <Dots /> },
//     // myProjects: { title: 'My projects', svg: <Dots /> },
//     // unactiveProjects: { title: 'Unactive projects', svg: <Dots /> }
//   }, 
//   tableMove: {
//     passwords: { title: 'Active projects' },
//     untiedPasswords: { title: 'My projects' },
//   }, 
//   tablePasswords: {
//     passwords: { title: 'Active projects' },
//     accessingSSH: { title: 'Accessing the site trough SSH' },
//     website: { title: 'Website' },
//   }
// }
   //projectCard
   export const projectCardPopupData = {
    title:'Project card',
    
     redact:{svg:<SideSetting/>,title:'Redact',childPopups:{popupsData:[centeredPopupData.redactProject],popups:[CenteredPopup]}},
     move:{svg:<DoubleArrow/>,title:'Move',childPopups:{popupsData:[sidePopupData.cardMove],popups:[SidePopup]}},
     delete:{svg:<Bin/>,title:'Delete',childPopups:{popupsData:[centeredPopupData.dltProject],popups:[DeletePopup]}},
   }
   export const SSHCardPopupData = {
    title:'SSH card',
    
     redact:{svg:<SideSetting/>,title:'Redact',childPopups:{popupsData:[centeredPopupData.redactCategory],popups:[CenteredPopup]}},
     delete:{svg:<Bin/>,title:'Delete',childPopups:{popupsData:[centeredPopupData.dltProject],popups:[DeletePopup]}},
   }
   export const settingsPopupData = {
    title:'settings',
    
    move:{svg:<DoubleArrow/>,title:'Move',childPopups:{popupsData:[sidePopupData.settingsMove],popups:[SidePopup]}},
    createSection:{svg:<Documentplus/>,title:'Create section',childPopups:{popupsData:[centeredPopupData.createSection],popups:[CenteredPopup]}},
  
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
   export const tablePopupData = {
    title:'table',
     move:{svg:<DoubleArrow/>,title:'Move',childPopups:{popupsData:[sidePopupData.tableMove],popups:[SidePopup]}},
     tie:{svg:<Chain/>,title:'Tie to a category',childPopups:{popupsData:[sidePopupData.tablePasswords],popups:[SidePopup]}},
     redact:{svg:<Key/>,title:'Redact password',childPopups:{popupsData:[centeredPopupData.redactPassword],popups:[CenteredPopup]}},
     delete:{svg:<Bin/>,title:'Delete',childPopups:{popupsData:[centeredPopupData.dltPassword],popups:[DeletePopup]}},
   }
  
  
  export const copupData = {
    settings: {},
  }