import React, { useContext } from 'react';
import { PropertiesContext } from '../context/PropertiesContext'

function PropertyList(){
    const { propertyList } = useContext(PropertiesContext);

    console.log("propertyList", propertyList);

    return (
        <div>
            <h2>Liste de properties :</h2>
            <ul>
                {propertyList.map(property => (
                    <li key={property.id}>
                        <h3>Name : {property.title}</h3>
                        <p>Description :{property.description}</p>
                        <p>Price :{property.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
       
}

export default PropertyList;