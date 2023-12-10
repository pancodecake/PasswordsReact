import React from "react";
import { useOutletContext } from 'react-router-dom';


function Index(props) {


  const {Sections} = useOutletContext()
  return (
    <Sections/>
  )
}

export { Index };
