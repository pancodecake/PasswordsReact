import React, { useRef, useEffect, useId } from "react";

import TableRow from "./components/TableRow";
import useWindowWidthChange from "../../hooks/useWindowWidthChange";
import { ReactComponent as Arrow } from "@assets/Up.svg";
import { ReactComponent as MoreSvg } from "@assets/icon-more.svg";
import useGlobalContext from "../../context/GlobalContext";
import TableTitleHiddenElements from "./components/TableTitleHiddenElements";
import TableTitleWidth from "./function/TableTitleWidth";
import TableTitles from "./components/TableTitles";




function Table({data}) {

  const { headTitles,moreBtn,modals,modalsData, ...rowItems } = data;
  const tableRowTitleRef = useRef([]);
  const tableHeadTitleRef = useRef([]);
  const tablePagionationDOM = [];
  const tableRowsDOM = [];
  const extraRowItem = moreBtn ? [moreBtn].length : 0
  console.log(headTitles,rowItems,extraRowItem.length,'rowItemsmoreBtn');
  const titleRowEquality = Object.values(headTitles).length ===  Object.values(rowItems).length + extraRowItem
  TableTitleWidth(tableRowTitleRef.current,tableHeadTitleRef.current,titleRowEquality)
  for (let i = 0; i < 8; i++) {
    tablePagionationDOM.push(
      <button key={i} className="table-pagionation__num">
        {i}
      </button>
    );
  }
  for (let i = 0; i < 5; i++) {
    tableRowsDOM.push(
      <TableRow key={i} moreBtn={moreBtn} modals={modals} modalsData={modalsData} ref={tableRowTitleRef} rowItems={rowItems} />
    );
  }

  return (
    <section className="table">
      <div className="table-head">
        <TableTitles titles={headTitles} ref={tableHeadTitleRef}/>
        {titleRowEquality ? <TableTitleHiddenElements firstVal={ Object.values(rowItems).length} secondVal={Object.values(headTitles).length} item={<MoreSvg/>} />
        : <div className="table-hidden">{<MoreSvg/>}</div>}
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
