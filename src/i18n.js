// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// Les traductions
const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Langue initiale
    fallbackLng: "en", // Utilisé si la langue actuelle n'a pas de traduction
    interpolation: {
      escapeValue: false // React échappe déjà les valeurs
    }
  });

export default i18n;
