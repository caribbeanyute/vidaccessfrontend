import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
  //const user = localStorage.getItem('user')
  const user = localStorage.getItem('token')
  return !!user;
}

const PublicRoute = () => {

  const auth = useAuth()

  return auth ?  <Navigate to="/login" /> : <Outlet /> ;
}

export default PublicRoute;