import React from 'react';
import './etage.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
const Etage1 = () => {
  const rasberryEnabled = true;

  return (
    <div>
      <div className="floor-container">
        <h1 className="floor-title">Étage 1</h1>
        <p className="floor-description">Cet étage comprend 2 appartements.</p>
        <br />
        <div className="floor-details">
          <div className="floor-details-left">
            <img className="floor-image" src='appart5.png' alt="Plan de l'étage" />
          </div>
          <div className="floor-details-right">
            <div className="apartment-details">
              <h2>Appartement 1</h2>
              <p><strong>État Raspberry:</strong> {rasberryEnabled ? 'Activé' : 'Désactivé'}</p>
              <div className={`light ${rasberryEnabled ? 'light-green' : 'light-red'}`}></div>
            </div>
          </div>
        </div>
      </div>


      <div className="floor-container">
        <br />
        <div className="floor-details">
          <div className="floor-details-left">
            <img className="floor-image" src='appart2.png' alt="Plan de l'étage" />
          </div>
          <div className="floor-details-right">
            <div className="apartment-details">
              <h2>Appartement 1</h2>
              <p><strong>État Raspberry:</strong> {rasberryEnabled ? 'Activé' : 'Désactivé'}</p>
              <div className={`light ${rasberryEnabled ? 'light-green' : 'light-red'}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Etage1;
