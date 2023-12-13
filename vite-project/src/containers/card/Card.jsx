import React, { useEffect } from "react";
import useGlobalContext from "../../context/GlobalContext";
import { NavLink,Link } from "react-router-dom";
import usePopupContext from "../../context/PopupContext";
import usePopupCompiler from "../../hooks/popupHooks/usePopupCompiler";
import ModalBtnHandler from "../../functions/ModalBtnHandler";
import ModalComponent, { modalsTags } from "../../components/modalComponent";


function Card({children,data,index}) {
  const {useBreadcrumbs,currentModal} = useGlobalContext();
  console.log(currentModal,'currentModal');
  // console.log(e.currentTarget.querySelector('button').classList.contains('open'),'this') + !e.currentTarget.querySelector('button').classList.contains('open') && e.preventDefault()
  return (
    <div className="card">

      <NavLink onClick={(e) => e.target.closest('.popup') !== null &&  e.preventDefault() }  to={useBreadcrumbs() === 'category' ? '/access' : '/category'}>
        <div className="card-head">
          <div className="card-head__box"></div>
          <h3 className="card-head__title">{  data.title }</h3>
          <ModalComponent  modalComponents={data.popups} modalData={data.popupsData} btnContent={data.modalbtnContent} />
          {/* <ModalComponent /> */}
          {/* <button popuptag={modalTagRef.current?.tag} onClick={(e) => onClickHandle(e)} className="more-btn btn-modal"><data.modalbtnContent/></button>  */}
        </div>
        <div className="card-owner">
          <h4 className="card-owner__title">Owner</h4>
          <p className="card-owner__name">{data.owner}</p>
        </div>
        <div className="card-date">
          <h4 className="card-owner__title">Creation Date</h4>
          <p className="card-date__time">{data.date}</p>
        </div>
        </NavLink>
    </div>
  );
}

export default Card;
