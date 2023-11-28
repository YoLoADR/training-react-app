import React from "react";
import { useTranslation } from 'react-i18next';
import ProductList from '../components/ProductList'

function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Accueil</h1>
      <p>{t('welcome')}</p>
      
      <ProductList/>
    </div>
  );
}

export default Home;