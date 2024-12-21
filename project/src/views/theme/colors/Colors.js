import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './imeuble.css';
import { BASE_URL } from '../../../config';

const Immeuble = () => {
  const [immeubles, setImmeubles] = useState([]);

  useEffect(() => {
    const fetchImmeubles = async () => {
      try {
        const response = await axios.get(`${BASE_URL}Immeubles`, {
          headers: {
            accept: 'text/plain',
            'Authorization': `Bearer ${localStorage.token}`
          }
        });
        setImmeubles(response.data.$values);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching the immeubles data:', error);
      }
    };

    fetchImmeubles();
  }, []);

  const getCoordsForEtage = (index) => {
    const totalHeight = 433;
    const firstEtageHeight = totalHeight * 0.35; // 35% of the total height
    const otherEtagesHeight = (totalHeight * 0.65) / 3; // Remaining 65% divided by 3

    if (index === 0) {
      // First floor
      const top = totalHeight - firstEtageHeight;
      return `0,${top},577,433`;
    } else {
      // Other floors
      const top = totalHeight - firstEtageHeight - (index * otherEtagesHeight);
      const bottom = top + otherEtagesHeight;
      return `0,${top},577,${bottom}`;
    }
  };

  return (
    <div>
      {immeubles.map((immeuble) => (
        <div className="immeuble-container" key={immeuble.id}>
          <div className="left-section">
            <h1 className="liste-titre">{`Immeuble ${immeuble.id}`}</h1>
            <div className="immeuble-info">
              <p>{`Nombre d'étages: ${immeuble.nbrEtages}`}</p>
              <p>{`Nombre total d'appartements: ${immeuble.nbrAppartements}`}</p>
            </div>
          </div>
          <div className="right-section">
            <img
              className="immeubleDivise"
              src={`imeuble.png`}
              alt={`immeuble`}
              useMap={`#etagesMap${immeuble.id}`}
              width="577"
              height="433"
            />
            <map name={`etagesMap${immeuble.id}`}>
              {immeuble.etages && immeuble.etages.$values.map((etage, index) => (
                <Link
                  key={etage.id}
                  to={`/etage/${etage.id}`} // Redirect to /etage/:id
                >
                  <area
                    shape="rect"
                    coords={getCoordsForEtage(index)} // Use the calculated coordinates
                    alt={`Etage ${index + 1}`}
                    title={`Étage ${index + 1}`} // Add title for accessibility
                  />
                </Link>
              ))}
            </map>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Immeuble;
