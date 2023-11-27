import React, {createContext, useState } from 'react';
import properties from '../mocks/properties';

export const PropertiesContext = createContext();

export const PropertiesProvider = ({children}) => {
    const [propertyList, setPropertyList] = useState(properties);
    return <PropertiesContext.Provider value={{ propertyList, setPropertyList}}>
            {children}
        </PropertiesContext.Provider>
}