import React from 'react';
import { Navigate } from 'react-router-dom';
 
export const PrivateRoute = ({ children, username }) => {
 
  return (username)
    ? children
    : <Navigate to='/login' />
}