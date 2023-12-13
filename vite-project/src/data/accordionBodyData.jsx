
import { ReactComponent as MoreSvg } from "@assets/icon-more.svg";
import { ReactComponent as DocumentCopySvg } from "@assets/documentcopy.svg";
import { ReactComponent as EyeSvg } from "@assets/eye.svg";
import { ReactComponent as TableTitleSvg } from "@assets/tableTitle.svg";
import { ReactComponent as HideEye } from "@assets/hideeye.svg";
import { SSHCardPopupData,projectCardPopupData, tablePopupData } from "./popupsData";
import DeletePopup from "../containers/popups/deletePopups/DeletePopup";
import CenteredPopup from "../containers/popups/centeredPopups/CenteredPopup";
import SidePopup from "../containers/popups/sidePopups/SidePopup";


export const tableData = {
    headTitles: {
      name: {name:"Name", svg:<TableTitleSvg />},
      desc: {name:"Desc", svg:<TableTitleSvg />},
      login: {name:"Login", svg:<TableTitleSvg />},
      password: {name:"Password", svg:<TableTitleSvg />},
      url: {name:"Url", svg:<TableTitleSvg />},
      foundingDate: {name:"Date Created", svg:<TableTitleSvg />},
    },
    name: "Mark Pancake",
    desc: "Changing the path to the site",
    login: "Admin",
    password:{password:'queyrd3619',btns:[{name:'copy',svg:<DocumentCopySvg />},{name:'show',svg: <EyeSvg />,eventSvg:<HideEye/>}]},
    url: "https://lk.skillline.ru/",
    date: "2020-01-01",
    moreBtn:  <MoreSvg />,
    popups:[SidePopup],
    popupsData:[tablePopupData]
  
  
  };
  export const historyTableData = {
    headTitles: {
      desc: ["Description", <TableTitleSvg />],
      changer: ["Changer", <TableTitleSvg />],
      changegDate: ["Change date", <TableTitleSvg />],
    },
    desc: "Access website by SSH",
    changer: "Mark Pancake",
    changegDate: "2020-01-01",
  };
  export const projectCardData = {
    title: "New Project",
    owner: "Mark Pancake",
    date: "2020-01-01",
    modalbtnContent: <MoreSvg/>,
    popupBtn:{name:'copy',svg:<DocumentCopySvg />},
    popups:[SidePopup],
    popupsData:[projectCardPopupData]
  };
  export const SSHCardData = {
    title: "Access website trough SSH",
    owner: "Mark Pancake",
    date: "2020-01-01",
    modalbtnContent: <MoreSvg/>,
    popups:[SidePopup],
    popupsData:[SSHCardPopupData]
  };