// components/ProtectedRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    // Rediriger vers la page de connexion, en conservant l'emplacement actuel pour un éventuel retour après connexion
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};


export default ProtectedRoute;
