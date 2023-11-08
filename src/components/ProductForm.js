// Importation des hooks React et de notre base de données Firebase
import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Assurez-vous que le chemin d'accès est correct

// Définition du composant ProductForm
const ProductForm = () => {
  // Déclaration des états locaux pour gérer les propriétés et la propriété sélectionnée
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  // Utilisation de useEffect pour charger les propriétés depuis Firebase lors du montage du composant
  useEffect(() => {
    // Écoute des changements dans la collection 'properties' de Firebase
    const unsubscribe = db.collection('properties').onSnapshot(snapshot => {
      // Transformation des données reçues en un tableau d'objets
      const fetchedProperties = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      // Mise à jour de l'état avec les propriétés récupérées
      setProperties(fetchedProperties);
    });

    // Fonction de nettoyage qui se déclenche lors du démontage du composant
    return () => unsubscribe();
  }, []);

  // Fonction pour ajouter une nouvelle propriété dans Firebase
  const handleSave = (newProperty) => {
    db.collection('properties').add(newProperty);
  };

  // Fonction pour mettre à jour une propriété existante dans Firebase
  const handleUpdate = (propertyId, updatedProperty) => {
    db.collection('properties').doc(propertyId).update(updatedProperty);
  };

  // Fonction pour supprimer une propriété de Firebase
  const handleDelete = (propertyId) => {
    db.collection('properties').doc(propertyId).delete();
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    const propertyData = { title, description, price };

    // Vérifie si une propriété est sélectionnée pour la mise à jour
    if (selectedProperty) {
      handleUpdate(selectedProperty.id, propertyData);
    } else {
      handleSave(propertyData); // Sinon, ajoute une nouvelle propriété
    }

    // Réinitialisation des champs du formulaire
    setTitle('');
    setDescription('');
    setPrice('');
    setSelectedProperty(null);
  };

  // Fonction pour pré-remplir le formulaire avec les données d'une propriété existante
  const handleEdit = (property) => {
    setSelectedProperty(property); // Mise à jour de la propriété sélectionnée
    setTitle(property.title); // Pré-remplissage du titre
    setDescription(property.description); // Pré-remplissage de la description
    setPrice(property.price); // Pré-remplissage du prix
  };

  // Rendu du formulaire et de la liste des propriétés
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Champs du formulaire pour saisir les informations de la propriété */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre de la propriété"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description de la propriété"
          required
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Prix"
          required
        />
        {/* Bouton pour soumettre le formulaire */}
        <button type="submit">{selectedProperty ? 'Mettre à jour' : 'Ajouter'}</button>
      </form>
      {/* Affichage de la liste des propriétés avec les options de modification et suppression */}
      {properties.map((property) => (
        <div key={property.id}>
          <h3>{property.title}</h3>
          <p>{property.description}</p>
          <p>{property.price}</p>
          <button onClick={() => handleEdit(property)}>Modifier</button>
          <button onClick={() => handleDelete(property.id)}>Supprimer</button>
        </div>
      ))}
    </>
  );
};

export default ProductForm;
