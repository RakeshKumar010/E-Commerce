import React from 'react'
import {Navigate, Outlet } from 'react-router-dom'
// import SignUp from './SignUp'

const PrivateComponents = () => {
    const auth = localStorage.getItem('Users')
  return auth?<Outlet/>:<Navigate to="/SignUp"/>
  
}

export default PrivateComponents