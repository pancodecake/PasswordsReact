import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
  useId,
} from "react";
import AccardionHead from "../../components/accordion/AccardionHead";
import CheckList from "../../layouts/CheckList";
import useComponentAmounts from "../../hooks/useComponentAmount";
import useWindowWidthChange from "../../hooks/useWindowWidthChange";
import usePreventDoubleRenderEffect from "../../hooks/usePreventDoubleRenderEffect";
import usePopupCompiler from "../../hooks/popupHooks/usePopupCompiler";
import ModalComponent from "../../components/modalComponent";


function accordion(param) {
  const accordionBodyRef = useRef(null);
  const accordionConRef = useRef()
  const [active, setActive] = useState(true);
  const compType = param.accordionComponents.get("body");
  let popupData = param.accordionComponents.get("popupsData")
  let popups = param.accordionComponents.get("popups")
  usePreventDoubleRenderEffect(() => {
    active ? (accordionBodyRef.current.className += "open") : "";
  }, [active]);
  usePreventDoubleRenderEffect(() => {
    setTimeout(() => {
      accordionBodyRef
        ? (accordionBodyRef.current.style.height = `${accordionConRef.current.getBoundingClientRect().height
          }px`)
        : (accordionBodyRef.current.style.heigh = "unset");
    }, 1000);
  }, [useWindowWidthChange()]);
  return (
    <>
      <div className="accordion">
        <AccardionHead
          setActive={setActive}
          active={active}
          title={param.accordionComponents.get("title")}
          btns={
            param.accordionComponents.has("accardionBtns") && param.accordionComponents.get("accardionBtns")
          }
          popups={param.accordionComponents.has("popups") && param.accordionComponents.get("popups")}
          popupsData={param.accordionComponents.get("popupsData")}
        />


        <div
          ref={accordionBodyRef}
          className={`accordion__body ${active ? "" : "closed"}`}
        >
          <div
            ref={accordionConRef}
            className={`${param.accordionComponents.get("body").name?.toLowerCase()}-container`}>
 
            {
              useComponentAmounts(
                param.accordionComponents.get("amount"),
                compType,
                param.accordionComponents.get("bodyContent"),
                accordionBodyRef,
                param.accordionComponents.get("title"),
              )}
          </div>
        </div>

      </div>
    </>
  );
}

export default accordion;
