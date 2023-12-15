
import { ReactComponent as MoreSvg } from "@assets/icon-more.svg";
import { ReactComponent as DocumentCopySvg } from "@assets/documentcopy.svg";
import { ReactComponent as EyeSvg } from "@assets/eye.svg";
import { ReactComponent as TableTitleSvg } from "@assets/tableTitle.svg";
import { ReactComponent as HideEye } from "@assets/hideeye.svg";
import { SSHCardmodalData,projectCardmodalData, tablemodalData } from "./modalsData";
import DeleteModal from "../containers/modals/DeleteModals/DeleteModal";
import CenteredModal from "../containers/modals/CenteredModals/CenteredModal";
import SideModal from "../containers/modals/SideModals/SideModal";


export const tableData = {
    headTitles: {
      name: {name:"Name", svg:<TableTitleSvg />},
      desc: {name:"Description", svg:<TableTitleSvg />},
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
    modals:[SideModal],
    modalsData:[tablemodalData]
  
  
  };
  export const historyTableData = {
    headTitles: {
      desc: {name:"Description", svg:<TableTitleSvg />},
      changer: {name:"User", svg:<TableTitleSvg />},
      changeDate: {name:"Date Changed", svg:<TableTitleSvg />},
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
    modalBtn:{name:'copy',svg:<DocumentCopySvg />},
    modals:[SideModal],
    modalsData:[projectCardmodalData]
  };
  export const SSHCardData = {
    title: "Access website trough SSH",
    owner: "Mark Pancake",
    date: "2020-01-01",
    modalbtnContent: <MoreSvg/>,
    modals:[SideModal],
    modalsData:[SSHCardmodalData]
  };