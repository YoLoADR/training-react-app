import React from "react";
import AddPropertyForm from '../components/AddPropertyForm';

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Bienvenue sur la page Contact de notre application!</p>
      <hr/>
      <h2>Ajouter une nouvelle propriété</h2>
      <AddPropertyForm />
    </div>
  );
}

export default Contact;