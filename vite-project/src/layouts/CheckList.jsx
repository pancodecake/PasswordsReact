import React from "react";
const ChecklistsData = {
  inviteed:{
      title:'Invite To Project',
      list:['Joe Doe','Matt Patt','Markiplayer Example','Felix Kindelberg','Seymen Satilmaz'],
  },
  allowAccess:{
      title:'Allow Access',
      list:['Joe Doe','Matt Patt','Markiplayer Example','Felix Kindelberg','Seymen Satilmaz'],
  }
}
function CheckList() {
  const checklistDOM = ChecklistsData.inviteed.list.map((name) => {
    return (
      <div className="modal-checklist__item">
      <label className="check">
        <input className="check__input" type="checkbox" />
        <span className="check__box"></span>
        {name}
      </label>
    </div>
    )
  })
  
  return (
    <div className="checklist">
      <div className="checklist-container">
        <div className="triangle"></div>
        <div className="modal-add__header modal-add__header--list">
          <h3 className="invite-h3">{ChecklistsData.inviteed.title}</h3>
        </div>
        <div className="modal-checklist__list">
         {checklistDOM}
        </div>
      </div>
      <div className="checklist-btns">
        <input className="btn__a" type="button" value="Save" />
        <input className="btn__b close" type="button" value="Decline" />
      </div>
    </div>
  );
}

export default CheckList;
