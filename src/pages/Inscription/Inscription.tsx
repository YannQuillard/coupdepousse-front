import React from 'react';
import './Inscription.css';

function Inscription() {
  return (
    <div className="inscription">
      <div className="container">
        <h1 className="title title_white">Inscription</h1>
        <div className="input">
          <div className='input_first_raw'>
            <input
              type="text"
              className="input_content"
              placeholder="Prénom"
            />
            <input
              type="text"
              className="input_content"
              placeholder="Adresse"
            />
            <input
              type="text"
              className="input_content"
              placeholder="Code postal"
            />
            <input
              type="text"
              className="input_content"
              placeholder="Téléphone"
            />
          </div>
          <div className='input_second_raw'>
            <input
                type="text"
                className="input_content"
                placeholder="Nom"
            />
            <input
              type="date"
              className="input_content"
              placeholder="Date de naissance"
            />
            <input
              type="text"
              className="input_content"
              placeholder="Ville"
            />
          </div>
        </div>  
        <div className="bnt_round">
          <a>Créer un compte</a>
        </div>
      </div>
    </div>
  );
}

export default Inscription;