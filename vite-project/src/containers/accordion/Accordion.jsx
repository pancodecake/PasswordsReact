import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
  useId,
} from "react";
import AccardionHead from "./components/AccardionHead";

import ComponentAmounts from "../../functions/ComponentAmount";
import useWindowWidthChange from "../../hooks/useWindowWidthChange";
import usePreventDoubleRenderEffect from "../../hooks/usePreventDoubleRenderEffect";
import RemoveModalAnimations from "../../hooks/RemoveModalAnimations";
import useGlobalContext from "../../context/GlobalContext";



function accordion(param) {
  const {addMultiRef} = useGlobalContext()
  const accordionBodyRef = useRef(null);
  const accordionConRef = useRef()
  const [active, setActive] = useState(true);
  const compType = param.accordionComponents.get("body");
  
  usePreventDoubleRenderEffect(() => {
;
    active ? (accordionBodyRef.current.className += "open") : "";
    accordionBodyRef.current.className += ' initial-render'
    const timeoutId = setTimeout(() => {

      accordionBodyRef.current.classList.remove('initial-render');
    }, 100); // Adjust the delay as needed

    // Cleanup on unmount
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    function afterDocumentReady() {
      console.log('Document is ready');
      accordionBodyRef
      ? (accordionBodyRef.current.style.height = `${accordionConRef.current.getBoundingClientRect().height
        }px`)
      : (accordionBodyRef.current.style.heigh = "unset");
    }

    // Check if the document is already in the 'complete' state
    if (document.readyState === 'complete') {
      afterDocumentReady();
    } else {
      // Attach an event listener for the 'readystatechange' event
      const handleReadyStateChange = () => {
        if (document.readyState === 'complete') {
          // Document is ready, execute the function
          afterDocumentReady();

          // Cleanup: Remove the event listener
          document.removeEventListener('readystatechange', handleReadyStateChange);
        }
      };

      // Attach the event listener
      document.addEventListener('readystatechange', handleReadyStateChange);

      // Cleanup function to remove the event listener when the component is unmounted
      return () => {
        document.removeEventListener('readystatechange', handleReadyStateChange);
      };
    }
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
          modals={param.accordionComponents.has("modals") && param.accordionComponents.get("modals")}
          modalsData={param.accordionComponents.get("modalsData")}
        />


        <div
          ref={accordionBodyRef}
          className={`accordion__body ${active ? "" : "closed"}`}
        >
          <div
            ref={accordionConRef}
            className={`${param.accordionComponents.get("body").name?.toLowerCase()}-container`}>

            {
              ComponentAmounts(
                param.accordionComponents.get("amount"),
                compType,
                param.accordionComponents.get("bodyContent"),


              )}
          </div>
        </div>

      </div>
    </>
  );
}

export default accordion;
