import React, { useRef, useEffect, useState, useCallback } from 'react'
import usePreventDoubleRenderEffect from '../../../hooks/usePreventDoubleRenderEffect';
import useCallbackRef from '../../../hooks/useCallbackRef';

export default function HeaderBtns({ headerBtn }) {
    let totalwidth = 0;
    const [rect, ref] = useCallbackRef();
   
    if (rect !== null) {
        for (let el of rect.childNodes) {
     
            totalwidth += el.getBoundingClientRect().width + el.getBoundingClientRect().width / 4
        }
        rect.style.width = `${totalwidth}px`
    }

    return (
        <div ref={ref} className="header-btns">

            {headerBtn}
        </div>
    )
}
