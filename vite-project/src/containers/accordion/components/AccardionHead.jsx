import React, { useState, useId } from "react";
import { ReactComponent as Arrow } from "@assets/Up.svg";
import ModalComponent from "../../popups/components/ModalComponent";


function AccardionHead(props) {
  return (
    <div className="accordion-head">
      <h2>{props.title}</h2>
      <div className="accordion-head__btns">
        {props.btns && props.btns.length !== 0 && (
          <div className="accordion-head__btns-con">
            <ModalComponent key={props.title} modalComponents={props.popups} modalData={props.popupsData} btnContent={props.btns} />
          </div>
        )}

        <button
          onClick={(e) => props.setActive((oldValue) => !oldValue)}
          className={`accordion-arrow arrow ${props.active ? "active" : ""}`}
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
}

export default AccardionHead;
