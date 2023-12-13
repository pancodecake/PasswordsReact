import React from 'react'

export default function useFormData(setFormData,dataName,dataValue,type,checked) {

    setFormData(oldValue => ({...oldValue,[dataName]:type === 'checkbox' ? checked : dataValue}))
  
}
