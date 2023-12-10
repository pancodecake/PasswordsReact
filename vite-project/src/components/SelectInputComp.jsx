import React, { useState } from "react";
import { ReactComponent as Arrow } from "@assets/Up.svg";
import AddPersonalLayout from "../layouts/AddPersonalLayout";


function SelectInputComp() {
  const [activeModal,setActiveModal] = useState(false)
  return (
    <div className="popup-centered-input select-input">
      <div className="select-input__con">
      <h4 className="select-input__title ">+ Add personal</h4>
      <button onClick={() => setActiveModal(oldVal => !oldVal)} className={`select-input__btn arrow ${activeModal ? 'active' : ''}`}>
        <Arrow />
      </button>
      </div>
      <div className={`select-input__item arrow ${activeModal ? 'open' : 'closed'}`}>
      <AddPersonalLayout activeModal={activeModal} />
      </div>
     
    </div>
  );
}

export default SelectInputComp;
