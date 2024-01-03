
import { ReactComponent as TrashSvg } from "@assets/Icon.svg";
import { ReactComponent as FolderPlusSvg } from "@assets/folderplus.svg";
import { ReactComponent as PagePlusSvg } from "@assets/pageplus.svg";
import { ReactComponent as AccLockSvg } from "@assets/acclock.svg";
import Card from "../containers/card/Card";
import Table from "../containers/table/Table";
import { CenteredModalData } from "./modalsData";
import { SSHCardData, projectCardData,tableData,historyTableData } from "./accordionBodyData";
import DeleteModal from "../containers/modals/DeleteModals/DeleteModal";
import CenteredModal from "../containers/modals/centeredModals/CenteredModal";


const accordionContentData = {
    projects: [
      {
        modals:[CenteredModal,DeleteModal], 
        modalsData:[CenteredModalData.addProject,CenteredModalData.dltSection],
        body: Card,
        bodyContent: projectCardData,
        amount: 3,
        title: "Active Projects",
        accardionBtns: [[<PagePlusSvg />,`Add project`],[<TrashSvg />,`Delete project`]],
      },
      {
        modals:[CenteredModal,DeleteModal], 
        modalsData:[CenteredModalData.addProject,CenteredModalData.dltSection],
        body: Card,
        bodyContent: projectCardData,
        amount: 7,
        title: "My Projects",
     accardionBtns: [[<PagePlusSvg />,`Add project`],[<TrashSvg />,`Delete project`]]
      },
      {
        modals:[CenteredModal,DeleteModal],
        modalsData:[CenteredModalData.addProject,CenteredModalData.dltSection],
        body: Card,
        bodyContent: projectCardData,
        amount: 3,
        title: "Unbound Projects",   
     accardionBtns: [[<PagePlusSvg />,`Add project`],[<TrashSvg />,`Delete project`]]
      },
    ],
    category: [
      {
        modals:[CenteredModal,CenteredModal],
        modalsData:[CenteredModalData.createPassword,CenteredModalData.createCategory],
        body: Card,
        bodyContent: SSHCardData,
        cardTitle: "Access to page with SHSS",
        amount: 3,
        title: "Active Projects",
        accardionBtns:[[<AccLockSvg />,`Create password`],[<FolderPlusSvg />,`Create category`]]
      },
      {
        modals:[CenteredModal],
        modalsData:[],
        body: Table,
        bodyContent: tableData,
        amount: 1,
        title: "Passwords unbound to category",
        accardionBtns: [],
      },
    ],
    access: [
      {
        modals:[CenteredModal],
        modalsData:[CenteredModalData.createPassword],
        body: Table,
        bodyContent: tableData,
        amount: 1,
        title: "Passwords",
        accardionBtns:[[<AccLockSvg />,`Create password`]]
       
      },
      {
        modals:[CenteredModal],
        modalsData:[],
        body: Table,
        bodyContent: tableData,
        amount: 1,
        title: "Favorites",
        accardionBtns: [],
      },
    ],
    history: [
      {
        containerType: Table,
        body: Table,
        bodyContent: historyTableData,
        amount: 1,
        title: "History",
      },
    ],
  };
  export let accordionContentDataMap = new Map(
    Object.entries(accordionContentData)
  );
  export let avabilePagesData = [];
  for (let [key, value] of accordionContentDataMap) {
    accordionContentDataMap.set(
      key,
      value.map((val) => new Map(Object.entries(val)))
    );
    avabilePagesData.push(key);
  }
  