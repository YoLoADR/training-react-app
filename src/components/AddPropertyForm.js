import React, { useState } from "react";

function AddPropertyForm() {

const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: ''
});

const [errors, setErrors] = useState({})

const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name] : event.target.value
    })
}

const validateForm = () => {
    let formIsValid = true;
    let errors = {}

    if(!formData.title) {
        formIsValid = false;
        errors['title'] = 'Le titre est requis';
    }

    if(!formData.description) {
        formIsValid = false;
        errors['description'] = 'La description est requise';
    }

    if(!formData.price) {
        formIsValid = false;
        errors['price'] = 'Le prix est requis';
    } else if(isNaN(formData.price)){
        formIsValid = false;
        errors['price'] = 'Le prix doit être un nombre';
    }


    setErrors(errors)
    return formIsValid
}

const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Envoi des données du formulaire:', formData);
      // Ici, tu pourrais envoyer les données à un serveur
      // Simulons un délai de réponse avec setTimeout
      setTimeout(() => {
        alert('Propriété ajoutée avec succès!');
        // Réinitialiser le formulaire ici si nécessaire
        setFormData({
          title: '',
          description: '',
          price: '',
        });
      }, 1000);
    }
  };

  return (
    <div>
      <p>Bienvenue sur mon formulaire</p>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Titre : </label>
            <input 
             type="text"
             name="title"
             value={formData.title}
             onChange={handleChange}
             />
             {errors.title && <p>{errors.title}</p>}
        </div>
        <div>
            <label>Description : </label>
            <input 
             type="text"
             name="description"
             value={formData.description}
             onChange={handleChange}
             />
              {errors.description && <p>{errors.description}</p>}
        </div>
        <div>
            <label>Prix : </label>
            <input 
             type="text"
             name="price"
             value={formData.price}
             onChange={handleChange}
             />
             {errors.price && <p>{errors.price}</p>}
        </div>
        <button type="submit">Ajouter la propriété</button>
      </form>
    </div>
  );
}

export default AddPropertyForm;