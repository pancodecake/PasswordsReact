import React, { useEffect, useId } from 'react'

import useGlobalContext from '../../../context/GlobalContext'

function SidePopup({data,tag,active }) {
  const { currentPopupRef,currentModal,modal,addMultiRef} = useGlobalContext()
  console.log(currentModal,modal,active,'currentModal,modal');
  const listDataDOM = Object.values(data).map(popData => {
    let { childPopup, ...items } = popData
    return (
      <button className='side-popup__btn'>
        {...Object.values(items)}
      </button>
    )
  })
  return (
    <div ref={addMultiRef} tag={tag} className={`side-popup popup ${active  ? 'open' : 'closed'}`}>
      <div className="triangle"></div>
      {listDataDOM}
    </div>
  )
}
export default SidePopup