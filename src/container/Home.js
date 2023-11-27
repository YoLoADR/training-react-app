import React from "react";
import { Link } from "react-router-dom";
import PropertyList from '../components/PropertyList'

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Accueil</h1>
      <p>Bienvenue sur la page d'accueil de notre application en Live !</p>
      <Link to="/about">Lien vers : A propos</Link>
      <PropertyList/>
    </div>
  );
}

export default Home;