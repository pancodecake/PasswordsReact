import React, { useState } from 'react'
import { useLocation,Link } from "react-router-dom";

export default  function  useBreadcrumbs() {
    const location = useLocation()
   
    let currentLink = ''
    const crumbs = location.pathname.split('/').filter((item) => item !== '').map(crumb => {
        currentLink = `/${crumb}`

        return crumb
    })

    
  return crumbs.length === 0 ? 'projects' : crumbs[0]
}

