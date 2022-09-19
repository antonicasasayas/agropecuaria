import React from 'react'
import logo from '../images/les-arnaules-logo.jpg'
import { IoMenuOutline } from 'react-icons/io5'
const NavBar = () => {
  return (
      <div className='flex justify-between' >
          <img src={logo} className='w-32 object-contain' alt="logo" />
          <IoMenuOutline className='text-white' size={24} />
    </div>
  )
}

export default NavBar