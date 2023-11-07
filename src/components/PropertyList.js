// src/views/PropertyList.js
import React, { useContext } from 'react';
import { PropertiesContext } from '../contexts/PropertiesContext';

function PropertyList() {
  const { propertyList } = useContext(PropertiesContext);

  return (
    <div>
      <h2>Liste des Propriétés</h2>
      <ul>
        {propertyList.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>{property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyList;
