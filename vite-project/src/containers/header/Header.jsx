import React, { useEffect, useRef, useState, useId } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as SearchSvg } from "../../assets/search.svg";
import useGlobalContext from "../../context/GlobalContext";
import PrevLocation from "../../components/PrevLocation";
import HeaderDesc from "../../layouts/HeaderDesc.jsx";
import Sections from "../../components/Sections";
import LastPageStyle from "../../functions/LastPageTrans.js";
import usePreventDoubleRenderEffect from "../../hooks/usePreventDoubleRenderEffect.jsx";
import { navBtnDataMap } from "../../data/headerData.jsx";
import ModalComponent from "../../components/modalComponent.jsx";
import SidePopup from "../popups/sidePopups/SidePopup.jsx";
import { ChecklistsModalData, settingsPopupData } from "../../data/popupsData.jsx";
import ChecklistModal from "../../components/ChecklistModal.jsx";
import HeaderModals from "../../functions/HeaderModals.jsx";

function Header(param) {
  const { useBreadcrumbs,modalTagRef } = useGlobalContext();
  const [accordionHeadPopupActive, setAccordionHeadPopupActive] = useState(false);
  const location = useBreadcrumbs();
  const prevTitleRef = useRef();
  const pagesRef = useRef();
  const btnRef = useRef([]);
  const [headerBtn, setHeaderBtn] = useState();
  const arr = [];
  const headerBtns = useRef();
  let totalwidth = 0;
  usePreventDoubleRenderEffect(() => {
    LastPageStyle(location, pagesRef, prevTitleRef);
    for (let [key, value] of navBtnDataMap.get(location)) {

      key === "history"
        ? arr.push([
            <NavLink ref={(el) => btnRef.current.push(el)} to={key}>
              {value}
            </NavLink>,
          ])
        : arr.push([HeaderModals(key,value)]);
    }
    setHeaderBtn(arr);
  }, [location]);
  usePreventDoubleRenderEffect(() => {
    setTimeout(() => {
      for (let el of Object.values(headerBtns.current.children)) {
        totalwidth +=
          el.getBoundingClientRect().width +
          el.getBoundingClientRect().width / 4;
      }
      headerBtns.current.style.width = `${totalwidth}px`;
    }, 1);
  }, [location]);

  return (
    <>
      <header className="header">
        <div className="header-con">
          <div ref={pagesRef} className="header-pages">
            {useBreadcrumbs() !== "projects" && (
              <PrevLocation ref={prevTitleRef} />
            )}
            <h3 className="header-pages__current">{useBreadcrumbs()}</h3>
          </div>
          <div className="header-inputs">
            <div className="header-inputs__con">
              <input id="header-input" type="search" placeholder="search..." />
              <label htmlFor="header-input">
                <SearchSvg />
              </label>
            </div>
            <div ref={headerBtns} className="header-btns">
             
              {headerBtn}
            </div>
          </div>
        </div>
        {useBreadcrumbs() !== "projects" && <HeaderDesc />}
      </header>
      <main>

        <Outlet
          context={{ Sections, accordionHeadPopupActive, setAccordionHeadPopupActive }}
        />
      </main>
    </>
  );
}

export default Header;
