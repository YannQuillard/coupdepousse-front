import React from 'react';
import shopping_cart from "../../assets/images/shopping_cart_icon.svg"
import senior_img from "../../assets/images/Senior_img.jpg"
import "./Mission_Details.css"
import Header from '../../components/Header/Header';
import quote_left from "../../assets/images/quote_left.svg"
import quote_right from "../../assets/images/quote_right.svg"

function Mission_Details () {
    return (
        <div>
            <Header color='Black'></Header>
            <div className="mission_details container">
                <div className="details_left_column">
                    <div className="details_title">
                        <img className="iconCart" src={shopping_cart}/>
                        <h4 className='title_green titleMission'>Faire les courses</h4>
                    </div>
                    <div className="senior_profil small_Text">
                        <img alt="senior profile picture"src={senior_img}/>
                        <div>
                            <h3 className='title_green'>Josiane</h3>
                            <p>Inscrite depuis 2022</p>
                            <p>Paris, Odéon</p>
                        </div>
                    </div>
                    <div className="details_description">
                        <p className="quote">J’aimerais que quelqu’un vienne m’aider pour faire mes courses. Se sont des petites courses pour quelques repas uniquement. Ce serait rapide. Merci d’avance ! </p>
                    </div>
                    <p>Le : 29/03/2022 à 14h30</p>
                    <p>Pendant : 1 heure</p>
                    <a className="bnt_round">Postuler</a>
                    <div className="details_NB">
                        <p>NB : l’adresse exacte de Josiane ne vous sera communiquée que si vous êtes retenu pour la mission.</p>
                    </div>
                </div>
                <div className="details_right_column">
                    <p>Map</p>

                </div>
            </div>
        </div>

    );
}

export default Mission_Details