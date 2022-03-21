import React from 'react';
import logo from './logo.svg';
import './Inscription.css';

function Inscription() {
  return (
    <div className="inscription">
        <h1 className="title_white">Inscription</h1>
        <div className="input">
            <input
              type="text"
              className="input_content"
              placeholder="Prénom"
            />
            <input
              type="text"
              className="input_content"
              placeholder="Nom"
            />
            <input
              type="text"
              className="input_content"
              placeholder="Adresse"
            />
            <input
              type="date"
              className="input_content"
              placeholder="Date de naissance"
            />
            <input
              type="text"
              className="input_content"
              placeholder="Code postal"
            />
            <input
              type="text"
              className="input_content"
              placeholder="Ville"
            />
            <input
              type="text"
              className="input_content"
              placeholder="Téléphone"
            />
        </div>
        
        <div className="bnt_round">
          <a>Inscription</a>
        </div>

    </div>
     
  );
}

export default Inscription;