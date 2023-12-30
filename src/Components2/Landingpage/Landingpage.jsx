import React from 'react'
import './Landingpage.css'
import {Outlet,Link} from 'react-router-dom'
export const Landingpage = () => { 
  return (
    <div className='containers6'>
        <div className='header1'>
            <div className='title1'><h1>The Times Of XYZ</h1></div>
            <Link to="/login-signup" className='login'>Login-Signup</Link>
          <Outlet />
        </div>
    </div>
  )
}
 
