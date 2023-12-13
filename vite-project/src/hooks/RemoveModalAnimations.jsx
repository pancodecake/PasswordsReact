import React from 'react'
import useGlobalContext from '../context/GlobalContext'

export default function RemoveModalAnimations() {
    const { multiRef } = useGlobalContext()
    console.log(multiRef ,'multiRef ');
  return (
    <div>RemoveModalAnimations</div>
  )
}
