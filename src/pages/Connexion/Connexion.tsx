import React, { useState } from 'react';
import '../Signup/Signup.css';
import Header from '../../components/Header/Header';

const Connexion = () => {
  return (
    <div className="signup">
      <Header color="White"/>
      <div className="container">
        <h1 className="title title_white">Connexion</h1>
        <form>
          <div className="input">

          <div className='input_first_raw'>
            <input
              type="tel"
              className="input_content telephon_input"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
            {/* <input
              type="text"
              className="input_content telephon_input"
              placeholder="Téléphone"
            /> */}
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

export default Connexion;