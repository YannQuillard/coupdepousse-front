import React from 'react';
import logo from './logo.svg';
import './Inscription.css';

function Inscription() {
  return (
    <div className="Inscription">
        <h1 className="title_white">hello passiflore</h1>
        <div className="bnt_round">
          <a>Inscription</a>
        </div>
        <div className="input">
            <input
              type="text"
              className="input_content"
              placeholder="Téléphone"
            />
        </div>

    </div>
     
  );
}

export default Inscription;