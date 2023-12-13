import React from 'react'

import useGlobalContext from '../../../context/GlobalContext'
import ChildModalComponent from '../components/ChildModalComponent'



function SidePopup({ data, tag, active, className, dataModal }) {
  const { addMultiRef } = useGlobalContext()

  const listDataDOM = Object.values(data).map((popData,i) => {

    let { childPopups, title, svg } = popData



    return (
      <li key={title} className='side-popup__item'>
        {childPopups ? <ChildModalComponent key={i} modalComponents={childPopups.popups} modalData={childPopups.popupsData} btnClass={'side-popup__btn'} btnContent={[[svg, title]]} /> : <button key={title} name={title} className='side-popup__btn '>{svg}{title}</button>}
      </li>
    )
  })

  return (
    <div ref={addMultiRef} data-modal={dataModal} tag={tag} className={`side-popup ${className}  popup ${active ? 'open' : 'closed'}`}>
      <div className="triangle"></div>
      <ul className='side-popup__list'>
        {listDataDOM}
      </ul>
    </div>
  )
}
export default SidePopup