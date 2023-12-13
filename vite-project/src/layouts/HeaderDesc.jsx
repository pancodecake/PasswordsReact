import React from "react";
import { headerDescDataMap } from "../data/headerData";

function HeaderDesc() {
  let headerDescDOM = [];
  for (let [key, value] of headerDescDataMap) {
    headerDescDOM.push(
      <div key={key} id={key} className="header-description__item ">
        <h4>
          {value.title}
          {value.svg}
        </h4>
        <b>{value.content} </b>
      </div>
    );
  }
  return <div className="header-description">{headerDescDOM}</div>;
}

export default HeaderDesc;
