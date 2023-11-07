// src/contexts/UserContext.js
import React, { createContext, useState } from 'react';
import users from '../mocks/users';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState(users);

  // Ajoute ici les fonctions pour manipuler les utilisateurs si nécessaire

  return (
    <UserContext.Provider value={{ userList, setUserList }}>
      {children}
    </UserContext.Provider>
  );
};
