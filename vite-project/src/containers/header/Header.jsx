import React, {  useRef, useState, } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as SearchSvg } from "../../assets/search.svg";
import useGlobalContext from "../../context/GlobalContext";
import PrevLocation from "./components/PrevLocation.jsx";
import HeaderDesc from "./layout/HeaderDesc.jsx";
import Sections from "../../components/Sections";
import LastPageStyle from "./functions/LastPageTrans.js";
import usePreventDoubleRenderEffect from "../../hooks/usePreventDoubleRenderEffect.jsx";
import { navBtnDataMap } from "../../data/headerData.jsx";
import HeaderModals from "./functions/HeaderModals.jsx";
import HeaderBtns from "./components/HeaderBtns.jsx";

function Header(param) {
  const { useBreadcrumbs } = useGlobalContext();
  const [accordionHeadPopupActive, setAccordionHeadPopupActive] = useState(false);
  const location = useBreadcrumbs();
  const prevTitleRef = useRef();
  const pagesRef = useRef();
  const btnRef = useRef([]);
  const [headerBtn, setHeaderBtn] = useState([]);
  const arr = [];

// setHeaderBtn( oldVal => [...oldVal,HeaderModals(key,value)]);

  usePreventDoubleRenderEffect(() => {
    LastPageStyle(location, pagesRef, prevTitleRef);
    for (let [key, value] of navBtnDataMap.get(location)) {
      key === "history"
        ? arr.push([
            <NavLink key={value} ref={(el) => btnRef.current.push(el)} to={key}>
              {value}
            </NavLink>,
          ])
        : arr.push([HeaderModals(key,value)]);
    }
    setHeaderBtn(arr);
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
            <HeaderBtns headerBtn={headerBtn} />

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
