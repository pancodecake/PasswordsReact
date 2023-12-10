import React from "react";
import { ChecklistsModalData } from "../data/popupsData";

function ChecklistModal() {
  const checklistDOM = ChecklistsModalData.inviteed.list.map((name) => {
    return (
      <li className="modal-checklist__item">
      <label className="check">
        <input onChange={(e) => useFormData(setFormContent,input.name,e.target.value)} className="check__input" type="checkbox" />
        <span className="check__box"></span>
        {name}
      </label>
    </li>
    )
  })
  
  return (
    <div className="modal-checklist">
      <div className="modal-checklist__container">
        <div className="triangle"></div>
        <div className="modal-checklist__list">
          <h3 className="modal-checklist__title">{ChecklistsModalData.inviteed.title}</h3>
        </div>
        <FormComp btns={<PopupBtns  form={true} cancel={btns?.cancel}  confirm={btns?.confirm} />} inputs={checklistDOM} rest={restDOM} />
         

      </div>
 
    </div>
  );
}

export default ChecklistModal;
