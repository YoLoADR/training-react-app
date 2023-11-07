import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

function UserProfile() {
  const { userList } = useContext(UserContext);
  const user = userList[0]; // Simule l'utilisateur connecté

  return (
    <div>
      <h2>Profil de l'Utilisateur</h2>
      <p>Nom: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;