import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const {currentUser} = useSelector(state => state.user);
    const isAdmin = currentUser.email === 'nafeesalamofficial@gmail.com'
  return (
    currentUser && isAdmin ? <Outlet /> :<Navigate to='/signin' />
  )
}

export default PrivateRoute