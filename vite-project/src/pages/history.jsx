import React from 'react'
import Sections from '../components/Sections'
import { useOutletContext } from 'react-router-dom';
function History() {
  const {Sections} = useOutletContext()
  return (
    <Sections/>
  )
}

export default History