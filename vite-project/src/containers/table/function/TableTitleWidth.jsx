import React, { useEffect } from 'react'
import useWindowWidthChange from '../../../hooks/useWindowWidthChange';

export default function TableTitleWidth(RowRef,TitleRef,titleRowEquality) {
    useEffect(() => {
        const titleLength = titleRowEquality ? 1 : RowRef.length
        for (let i = 0; i < titleLength; i++) {
            TitleRef[i].style.marginRight = `${RowRef[i].getBoundingClientRect().width - TitleRef[i].getBoundingClientRect().width
        }px`;
        }
    }, [useWindowWidthChange()]);
}
