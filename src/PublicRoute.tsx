import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import LocalStorageService from './utils/LocalStorageService'

const localStorageService = LocalStorageService.getService();

const useAuth = () => {
  //const user = localStorage.getItem('user')
  const token = localStorageService.getAccessToken();
  return !!token;
}

const PublicRoute = () => {

  const auth = useAuth()

  return auth ?  <Navigate to="/login" /> : <Outlet /> ;
}

export default PublicRoute;