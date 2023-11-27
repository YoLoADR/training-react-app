import React from "react";
import ProductList from '../components/ProductList'

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Accueil</h1>
      <p>Bienvenue sur la page d'accueil de notre application en Live !</p>
      <ProductList/>
    </div>
  );
}

export default Home;