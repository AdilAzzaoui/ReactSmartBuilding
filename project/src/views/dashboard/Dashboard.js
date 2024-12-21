import React from 'react';
import './App.css'; 
//import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="image-with-text">
        <img src="Apartment.jpg" alt="Description de l'image" className="dashboard-image" />
        <div className="text-overlay animate__animated animate__fadeIn">
          Contrôlez du bout des doigts la température et l'humidité de votre appartement
        </div>
      </div>
        <div className="advantage-section">
          <h2>Avantages de notre site :</h2>
          <div className="advantage-list">
            <div className="advantage-item">
              <span className="advantage-number">1. Surveillance à distance en temps réel </span>
              <p className="advantage-description">Un site Web permet de surveiller la température et l'humidité de votre immeuble via un Raspberry Pi, offrant une surveillance à distance 24h/24 et 7j/7. Cette fonctionnalité est cruciale pour les propriétaires et les gestionnaires immobiliers, leur permettant de rester informés des conditions environnementales, même lorsqu'ils sont physiquement absents.
              </p>
            </div>
            <div className="advantage-item">
              <span className="advantage-number">2. Prise de décision informée </span>
              <p className="advantage-description">L'accès instantané aux données de température et d'humidité facilite la prise de décisions informées concernant la gestion de l'environnement intérieur. Détecter rapidement des changements inattendus permet de mettre en place des actions correctives avant qu'ils n'affectent le confort des occupants ou la structure du bâtiment
              .</p>
            </div>
            <div className="advantage-item">
              <span className="advantage-number">3. Contrôle automatisé et efficace</span>
              <p className="advantage-description"> Intégrer la capacité de contrôle de la température et de l'humidité depuis un Raspberry Pi permet d'automatiser les tâches de gestion environnementale. Cela inclut la programmation d'actions en réponse aux variations des conditions, ce qui garantit un confort optimal tout en optimisant l'efficacité énergétique
              .</p>
            </div>
          </div>
        </div>

        <div className="additional-info">
          <img className="additional-image" src="raspbery.png" alt="Image additionnelle" />
          <div className="additional-text">
            <p className="additional-title">Le Raspberry Pi :</p>
            <p className="additional-description">Le Raspberry Pi est un ordinateur monocarte abordable de la taille d'une carte de crédit, conçu pour encourager l'apprentissage de la programmation informatique et l'expérimentation électronique. Il sert de plateforme polyvalente pour une variété de projets informatiques et électroniques, permettant à des personnes de tous âges et de tous niveaux de compétence de réaliser des projets innovants et éducatifs.</p>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
