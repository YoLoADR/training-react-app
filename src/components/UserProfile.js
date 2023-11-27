import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext'

function UserProfile(){
    const { usersList } = useContext(UserContext);

    console.log("usersList", usersList);

    return (
        <div>
            <h2>Liste ds utilisateur :</h2>
            <ul>
                {usersList.map(user => (
                    <li key={user.id}>
                        <h3>Name : {user.name}</h3>
                        <p>E-mail :{user.email}</p>
                        <hr/>
                    </li>
                ))}
            </ul>
        </div>
    )
       
}

export default UserProfile;