import React from 'react'
import './Landingpage.css'
import {Outlet,Link} from 'react-router-dom'
export const Landingpage = () => { 
  return (
    <div className='containers6'>
        <div className='header'>
            <div className='title1'><h1>The Times Of XYZ</h1></div>
          <Outlet />
        </div>
    </div>
  )
}
 