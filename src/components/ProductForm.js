// Importation des hooks React et de notre base de données Firebase
import React, { useState, useEffect } from 'react'
import { db } from '../firebase'



// Définition du composant ProductForm
const ProductForm = () => {
    const [ properties, setProperties ] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [selectedProperty, setSelectedProperty] = useState('');

    useEffect(() => {
        const unsubscribe = db.collection('properties').onSnapshot(snapshot => { 
            const fetchedProperties = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            console.log("fetchedProperties", fetchedProperties);
            setProperties(fetchedProperties)
        });
        return () => unsubscribe();
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const propertyData = { title, description, price};
        if(selectedProperty){
            handleUpdate(selectedProperty.id, propertyData)
        }else{
            handleSave(propertyData)
        }
        //Reinit
        setTitle('')
        setDescription('')
        setPrice('')
      };

      const handleSave = (newProperty) => {
        db.collection('properties').add(newProperty);
      }

      const handleUpdate = (propertyId, updtedProperty) =>{
        db.collection('properties').doc(propertyId).update(updtedProperty);
      }

      const handleDelete = (propertyId) => {
        db.collection('properties').doc(propertyId).delete();
      }

      const handleEdit = (property) => {
        setSelectedProperty(property);
        setTitle(property.title)
        setDescription(property.description)
        setPrice(property.price)
      }

    return (
        <>
            <h1>Récuperation des doonnée d'une base de donnée cloud firestore</h1>
            { properties.map((property)=>(
                <div key={property.id}>
                    <h3>{property.title}</h3>
                    <p>{property.description}</p>
                    <p>{property.price}</p>
                    <button onClick={()=> handleEdit(property)}>Modifier</button>
                    <button onClick={()=> handleDelete(property.id)}>Supprimer</button>
                </div>
            ))}

            <form onSubmit={handleSubmit}>
        <div>
            <label>Titre : </label>
            <input 
             type="text"
             name="title"
             value={title}
             onChange={(e)=> setTitle(e.target.value)}
             />
        </div>
        <div>
            <label>Description : </label>
            <input 
             type="text"
             name="description"
             value={description}
             o onChange={(e)=> setDescription(e.target.value)}
             />
        </div>
        <div>
            <label>Prix : </label>
            <input 
             type="text"
             name="price"
             value={price}
             onChange={(e)=> setPrice(e.target.value)}
             />
        </div>
                <button type="submit">{ selectedProperty ? 'Mettre à jour' : 'Ajouter'}</button>
            </form>
        </>
    )
}


export default ProductForm;
      // Déclaration des états locaux pour gérer les propriétés et la propriété sélectionnée

      // Utilisation de useEffect pour charger les propriétés depuis Firebase lors du montage du composant
            //   const unsubscribe = db.collection('PR').onSnapshot(snapshot => {
            //     // Transformation des données reçues en un tableau d'objets
            //     const fetchedXXXXX = snapshot.docs.map(doc => ({
            //       id: doc.id,
            //       ...doc.data()
            //     }));
            //      console.log("fetchedXXXXXX", fetchedXXXXXX)  <--- CHALLENGE """""LE PREMIER REMPORTE LE VELO DE CEDRIC"""""""
            //     // Mise à jour de l'état avec les propriétés récupérées
            //     setXXXX(fetchedXXXXXX);
            //   });

        // Gestionnaire de soumission du formulaire

                // Réinitialisation des champs du formulaire
    
      // Rendu du formulaire et de la liste des propriétés

      // Champs du formulaire pour saisir les informations de la propriété


