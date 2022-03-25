import React from 'react';
import '../Signup/Signup.css';
import Header from '../../components/Header/Header';

function Connexion() {
    return (
        <div className="connexion">
            <Header color="White"/>
            <div className="container">
                <h1 className="title title_white">Connexion</h1>
                <div className="input input_connexion">
                <input
                    type="text"
                    className="input_content"
                    placeholder="Téléphone"
                    />
                <input
                    type="text"
                    className="input_content"
                    placeholder="Code de sécurité"
                    />
                </div>
                <div className="bnt_round">
                    <a>Connexion</a>
                </div>
            </div>
        </div>
    );
}

export default Connexion;