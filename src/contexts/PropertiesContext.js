// src/contexts/PropertiesContext.js
import React, { createContext, useState } from 'react';
import properties from '../mocks/properties';

export const PropertiesContext = createContext();

export const PropertiesProvider = ({ children }) => {
  const [propertyList, setPropertyList] = useState(properties);

  // Ajoute ici les fonctions pour manipuler les propriétés si nécessaire

  return (
    <PropertiesContext.Provider value={{ propertyList, setPropertyList }}>
      {children}
    </PropertiesContext.Provider>
  );
};
