import React from "react";
import { useParams } from "react-router-dom";

function PropertyDetails() {
  let { id } = useParams();
  // Ici, tu pourrais charger les données de la propriété en utilisant l'ID
  return <div>Détails de la propriété pour l'ID: {id}</div>;
}

export default PropertyDetails;