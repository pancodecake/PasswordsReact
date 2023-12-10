import React from 'react'
import { addPersonal } from "../data/data";

export default function AddPersonalLayout() {
    const personalBodyDOM =  addPersonal.body.map((person,i) => {
     let [src,name] = person
     console.log(src,name,'name');
        return (
          <li key={name}>
          <span className="add-personal__list__item">
            <img
              className="add-personal__list__img"
              src={src}
              alt={src}
              id={name}
            />
            <span className="add-personal__list__name">{name}</span>
          </span>
        </li>
        )
      })
      const  btnsDOM = addPersonal.head.map(btn => {
        return (
          <input
          key={btn}
          type="button"
          className="add-personal__head__btn"
          value={btn}
          id={btn}
        />
        )
      })
  return (
    <div className="add-personal">
    <div className="add-personal__head ">
      <div className="square-triangle"></div>
      {btnsDOM}
    </div>
    <div className="add-personal__body">
      <h4 className="add-personal__body__title">Personal:</h4>
      <ul className="add-personal__list">
      {personalBodyDOM}
      </ul>
    </div>
  </div>
  )
}
