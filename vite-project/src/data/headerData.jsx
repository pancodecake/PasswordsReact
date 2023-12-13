
import { ReactComponent as SettingsSvg } from "@assets/Shape.svg";
import { ReactComponent as PencilSvg } from "@assets/pencil.svg";
import { ReactComponent as GroupSvg } from "@assets/ppl.svg";
import { ReactComponent as ClockSvg } from "@assets/clock.svg";


const headerDescData = {
    owner: { title: "Owner", content: "Mark Pancake" },
    date: { title: "Date", content: "07.11.2022" },
    desc: {
    title: "Description",
    content: "Password storing website built on react",
    svg: <PencilSvg />,
    },
  };
  export let headerDescDataMap = new Map(Object.entries(headerDescData));
  const navBtnData = {
    projects: { settings: <SettingsSvg /> },
    category: { inviteChecklist: <GroupSvg /> },
    access: { history: <ClockSvg />, accessChecklist: <GroupSvg /> },
    history: {},
  };
  
  export const navBtnDataMap = new Map(Object.entries(navBtnData));
//    export default {navBtnDataMap}
  for (let [key, value] of navBtnDataMap) {
    navBtnDataMap.set(key, new Map(Object.entries(value)));
  }