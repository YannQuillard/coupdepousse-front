import React, { useState } from 'react';
import '../Signup/Signup.css';
import Header from '../../components/Header/Header';

const Connexion2 = () => {
  return (
    <div className="signup">
      <Header color="White"/>
      <div className="container">
        <h1 className="title title_white">Connexion</h1>
        <form>
          <div className="input">

          <div className='input_first_raw'>
              <p className="code_input">Saisir le numéro envoyé par SMS</p>
            <input
              type="text"
              className="input_content"
              placeholder="Code de sécurité"
            />
          </div>
          </div>
          <div>
            <input className="bnt_round connexion_bnt_round" type="submit" value="Suivant" />
          </div>
        </form>

      </div>
    </div>
  );
}

export default Connexion2;