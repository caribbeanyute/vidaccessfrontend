import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
  //const user = localStorage.getItem('user')
  const user = localStorage.getItem('token')
  return !!user;
}

const ProtectedRoute = (props: any) => {

  const auth = useAuth()

  return auth ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute;