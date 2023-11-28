// components/AuthControls.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../store/slices/authenticationSlice'; // Assurez-vous que le chemin est correct

const AuthControls = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  const user = useSelector((state) => state.authentication.user);
  const handleLogin = () => {
    // Remplacer par les valeurs réelles
    dispatch(login('user@example.com', 'password'));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {!isAuthenticated ? (
        <button
          onClick={handleLogin}
          className="py-2 px-4 bg-green-600 rounded hover:bg-green-700 transition duration-300"
        >
          Login
        </button>
      ) : (
        <div className="flex items-center">
          <img src="https://via.placeholder.com/32" alt="User" className="rounded-full mr-2" />
          <button
            onClick={handleLogout}
            className="py-2 px-4 bg-red-600 rounded hover:bg-red-700 transition duration-300 ml-2"
          >
            Logout {user && user.email}
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthControls;


