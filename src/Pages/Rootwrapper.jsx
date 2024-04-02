import React from 'react'
import { Outlet } from 'react-router-dom'

const Rootwrapper = () => {
  return (
    <div className='main-parent'>
        <Outlet/>
    </div>
  )
}

export default Rootwrapper