import React from 'react'
import { Navigate } from 'react-router-dom'
 
export const PublicRoute = ({ children, username }) => {
  return (username)
    ? <Navigate to='/' />
    : children
 
}