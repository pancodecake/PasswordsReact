import React, { useRef, useEffect, useId } from "react";

import TableRow from "../../layouts/table/TableRow";
import useWindowWidthChange from "../../hooks/useWindowWidthChange";
import { ReactComponent as Arrow } from "@assets/Up.svg";
import { ReactComponent as MoreSvg } from "@assets/icon-more.svg";




function Table({data}) {
  const { headTitles,moreBtn,popups,popupsData, ...rowItems } = data;
  const tableRowTitleRef = useRef([]);
  const tableHeadTitleRef = useRef([]);
  const tablePagionationDOM = [];
  const tableRowsDOM = [];
  
  useEffect(() => {
    for (let i = 0; i < tableRowTitleRef.current.length; i++) {
      tableHeadTitleRef.current[i].style.marginRight = `${
        tableRowTitleRef.current[i].getBoundingClientRect().width - tableHeadTitleRef.current[i].getBoundingClientRect().width
      }px`;
    }
  }, [useWindowWidthChange()]);
  for (let i = 0; i < 8; i++) {
    tablePagionationDOM.push(
      <button key={i} className="table-pagionation__num">
        {i}
      </button>
    );
  }
  for (let i = 0; i < 5; i++) {
    tableRowsDOM.push(
      <TableRow key={i} moreBtn={moreBtn} popups={popups} popupsData={popupsData} ref={tableRowTitleRef} rowItems={rowItems} />
    );
  }
  ////////////////////////////////////////////////////////////
  const tableTitlesDOM = Object.values(headTitles).map((title, i) => {
    return (
      <span
        key={title.name}
        ref={(el) => (tableHeadTitleRef.current[i] = el)}
        className="table-head__title"
      >
        <h4>{title.name}</h4>
        {title.svg}
      </span>
    );
  });

  return (
    <section className="table">
      <div className="table-head">
        {tableTitlesDOM}
        {<MoreSvg />}
      </div>
      <div className="table-rows">{tableRowsDOM}</div>
      <div className="table-pagination">
        <h3 className="table-pagination__title">страницы:</h3>
        <div className="table-pagination__pag"></div>
        <span className="table-pagination__nums">{tablePagionationDOM}</span>
        <div className="table-pagination__arrows">
          <a className="table-pagination__arrow prev" href="">
            <Arrow />
          </a>
          <h4 className="table-pagination__prev">предыдущая</h4>
          <h4 className="table-pagination__next">следующая</h4>
          <a className="table-pagination__arrow  next" href="">
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

export default  Table;
