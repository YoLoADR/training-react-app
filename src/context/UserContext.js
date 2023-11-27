import React, { createContext, useState } from 'react';
import users from '../mocks/users';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [usersList, setUsersList] = useState(users);
    return <UserContext.Provider value={{ usersList, setUsersList}}>
            {children}
        </UserContext.Provider>
}