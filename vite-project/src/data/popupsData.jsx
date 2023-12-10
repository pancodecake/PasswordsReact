
import { ReactComponent as SideSetting } from "@assets/sideSetting.svg";
import { ReactComponent as DoubleArrow } from "@assets/doublearrow.svg";
import { ReactComponent as Bin } from "@assets/bin.svg";
import { ReactComponent as Chain } from "@assets/chain.svg";
import { ReactComponent as Key } from "@assets/key.svg";
import { ReactComponent as Dots } from "@assets/dots.svg"
import { ReactComponent as Documentplus } from "@assets/documentplus.svg";

import Textarea from "../components/Textarea";
import SelectInputComp from "../components/SelectInputComp";
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
export const childPopupData = {

    cardMove:['My sections','Without sections'],
    settingsMove:[[<Dots/>,'Active projects'],[<Dots/>,'My projects'],[<Dots/>,'Unactive projects']],
    tableMove:['Passwords','Passwords without tie to a category'],
    tablePasswords:['Passwords','Accessing the site trough SSH','Website','Accessing the site trough SSH'],
  }
   //projectCard
   export const projectCardPopupData = {
    
     redact:{svg:<SideSetting/>,title:'Redact',childPopup:centeredPopupData.redactProject},
     move:{svg:<DoubleArrow/>,title:'Move',childPopup:childPopupData.cardMove},
     delete:{svg:<Bin/>,title:'Delete',childPopup:centeredPopupData.dltProject},
   }
   export const SSHCardPopupData = {
    
     redact:{svg:<SideSetting/>,title:'Redact',childPopup:centeredPopupData.redactCategory},
     delete:{svg:<Bin/>,title:'Delete',childPopup:centeredPopupData.dltProject},
   }
   export const settingsPopupData = {
  
    move:{svg:<DoubleArrow/>,title:'Move',childPopup:childPopupData.cardMove},
    createSection:{svg:<Documentplus/>,title:'Create section',childPopup:childPopupData.cardMove},
  
  }
  export const ChecklistsModalData = {
    inviteed:{
        title:'Invite To Project',
        list:['Joe Doe','Matt Patt','Markiplayer Example','Felix Kindelberg','Seymen Satilmaz'],
    },
    allowAccess:{
        title:'Allow Access',
        list:['Joe Doe','Matt Patt','Markiplayer Example','Felix Kindelberg','Seymen Satilmaz'],
    }
  }
   export const tablePopupData = {
    tag:'tablePopup',
     move:{svg:<DoubleArrow/>,title:'Move',childPopup:childPopupData.tableMove},
     tie:{svg:<Chain/>,title:'Tie to a category',childPopup:childPopupData.tablePasswords},
     redact:{svg:<Key/>,title:'Redact password',childPopup:centeredPopupData.redactPassword},
     delete:{svg:<Bin/>,title:'Delete',childPopup:centeredPopupData.dltPassword},
   }
  
  
  export const copupData = {
    settings: {},
  }