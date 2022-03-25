import React, { useState } from 'react';
import './Signup.css';
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';

const Signup3 = () => {
  return (
    <div className="signup">
      <Header color="White"/>
      <div className="container">
        <h1 className="title title_white">Inscription</h1>
        <form>
          <div className="input">
          <div className='input_first_raw'>
              <p className="code_input">Décrivez vous en quelques lignes.</p>
            <textarea className="input_description"
            >
            Description...
            </textarea>
          </div>
          </div>
          <div>
          <Link to="/younglanding">
            <input className="bnt_round connexion_bnt_round" type="submit" value="Créer un compte" />
          </Link>
          </div>
        </form>

      </div>
    </div>
  );
}

export default Signup3;