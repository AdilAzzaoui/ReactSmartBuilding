import React from 'react';
import { useParams } from 'react-router-dom';

const DetailImmeuble = ({ immeubles }) => {
  const { id } = useParams(); 


  const immeuble = immeubles.find(item => item.id === parseInt(id));

  if (!immeuble) {
    return <div>Immeuble non trouvé</div>;
  }

  return (
    <div className="container">
      <h1 className="mb-4">{immeuble.nom}</h1>
      <div className="card">
        <img className="card-img-top" src={immeuble.image} alt={immeuble.nom} />
        <div className="card-body">
          <p className="card-text">Adresse: {immeuble.adresse}</p>
          <p>ljgkjhgkjjkbkjjk</p>
        </div>
      </div>
    </div>
  );
};

export default DetailImmeuble;
