import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import LocalStorageService from './utils/LocalStorageService'

const localStorageService = LocalStorageService.getService();

const useAuth = () => {
  //const user = localStorage.getItem('user')

  const token = localStorageService.getAccessToken();
  return !!token;
}

const ProtectedRoute = (props: any) => {

  const auth = useAuth()

  return auth ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute;