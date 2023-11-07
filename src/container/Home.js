import React from "react";
import PropertyList from '../components/PropertyList';

function Home() {
  return (
    <div>
      <h1>Accueil</h1>
      <p>Bienvenue sur la page d'accueil de notre application!</p>
      <PropertyList/>
    </div>
  );
}

export default Home;