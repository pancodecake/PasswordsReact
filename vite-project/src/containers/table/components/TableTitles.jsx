import React from 'react'
import TableTitleHiddenElements from './TableTitleHiddenElements';

 function TableTitles({titles},ref) {
    
    const tableTitlesDOM = Object.values(titles).map((title, i) => {
        return (
            <span
                key={title.name}
                ref={(el) => (ref.current[i] = el)}
                className={`table-head__title `}
            >
                <h4>{title.name}</h4>
                {title.svg}
            </span>
        );
    });

    return tableTitlesDOM
}
export default React.forwardRef(TableTitles) 