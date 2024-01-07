import React from "react";


function ComponentAmounts(propComponentAmount, PropComponent, data) {
  const accordionComponentsDOM = [];
  const componentAmount = propComponentAmount

  for (let i = 0; i < componentAmount; i++) {
    accordionComponentsDOM.push(
      <PropComponent data={data}  key={i}/>
    )
  }

  return accordionComponentsDOM;
}

export default ComponentAmounts;
