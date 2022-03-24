import React from 'react';
import '../Signup/Signup.css';

function Connexion() {
    return (
        <div className="connexion">
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