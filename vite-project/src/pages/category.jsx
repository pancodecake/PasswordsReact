import React from 'react'
import Sections from '../components/Sections'
import { useOutletContext } from 'react-router-dom';
function Category() {
  const {Sections} = useOutletContext()
  return (
    <Sections/>
  )
}

export default Category