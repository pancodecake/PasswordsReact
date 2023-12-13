import React from 'react'

export default function TableTitleHiddenElements({firstVal,secondVal,item}) {

  const itemsAmount = Math.max(firstVal,secondVal) - Math.min(firstVal,secondVal)
  console.log(itemsAmount,'firstVal,secondVal');
  if(itemsAmount !== 0){
    for (let index = 0; index <= itemsAmount; index++) {
      itemsDOM.push(<div key={index} className="table-hidden">{item}</div>)
      
    }
    return itemsDOM
  }

    
  
}
