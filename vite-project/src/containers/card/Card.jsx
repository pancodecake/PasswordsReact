import React, { useEffect } from "react";
import useGlobalContext from "../../context/GlobalContext";
import { NavLink, Link } from "react-router-dom";
import ModalComponent from "../modals/components/ModalComponent";



function Card({ children, data, index }) {
  const { useBreadcrumbs, currentModal } = useGlobalContext();

  return (
    <div className="card">

      <NavLink onClick={(e) => e.target.closest('.modal') !== null && e.preventDefault()} to={useBreadcrumbs() === 'category' ? '/access' : '/category'}>
        <div className="card-head">
          <div className="card-head__box"></div>
          <h3 className="card-head__title">{data.title}</h3>
          <ModalComponent modalComponents={data.modals} modalData={data.modalsData} btnContent={data.modalbtnContent} />


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
