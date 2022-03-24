import React from 'react';
import shopping_cart from "../../assets/images/shopping_cart_icon.svg"
import senior_img from "../../assets/images/Senior_img.jpg"
import "./Mission_Details.css"

function Mission_Details () {
    return (
        <div>
            <div className="mission_first_raw">
                    <img className="iconCart" src={shopping_cart}/>
                    <h4 className='title_green titleMission'>Faire les courses</h4>
                    <div className="senior_profil small_Text">
                        <img alt="senior profile picture"src={senior_img}/>
                        <div>
                            <h3 className='title_green'>Josiane</h3>
                            <p>Inscrite depuis 2022</p>
                            <p>Paris, Odéon</p>
                        </div>
                        <div>
                            <p>J’aimerais que quelqu’un vienne m’aider pour faire mes courses. Se sont des petites courses pour quelques repas uniquement. Ce serait rapide. Merci d’avance ! </p>
                        </div>
                        <a>Postuler</a>
                        <p>NB : l’adresse exacte de Josiane ne vous sera communiquée que si vous êtes retenu pour la mission.</p>
                </div>
            </div>
        </div>

    );
}

export default Mission_Details