import React from 'react'

import useGlobalContext from '../../../context/GlobalContext'
import ChildModalComponent from '../components/ChildModalComponent'



function SideModal({ data, tag, active, className, dataModal }) {
  const { addMultiRef } = useGlobalContext()

  const listDataDOM = Object.values(data).map((popData,i) => {

    let { childmodals, title, svg } = popData



    return (
      <li key={title} className='side-modal__item'>
        {childmodals ? <ChildModalComponent key={i} modalComponents={childmodals.modals} modalData={childmodals.modalsData} btnClass={'side-modal__btn'} btnContent={[[svg, title]]} /> : <button key={title} name={title} className='side-modal__btn '>{svg}{title}</button>}
      </li>
    )
  })

  return (
    <div ref={addMultiRef} data-modal={dataModal} tag={tag} className={`side-modal ${className}  modal ${active ? 'open' : 'closed'}`}>
      <div className="triangle"></div>
      <ul className='side-modal__list'>
        {listDataDOM}
      </ul>
    </div>
  )
}
export default SideModal