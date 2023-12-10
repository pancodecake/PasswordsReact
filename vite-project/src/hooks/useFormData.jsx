import React from 'react'

export default function useFormData(setFormData,dataName,dataValue) {
    setFormData(oldValue => ({...oldValue,[dataName]:dataValue}))
  
}
