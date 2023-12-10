import React from 'react'

import { useOutletContext } from 'react-router-dom';

function Access(param) { 

  const {Sections} = useOutletContext()

  return (
    <Sections/>
  )
}

export default Access