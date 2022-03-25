import React from 'react';
import shopping_cart from "../../assets/images/shopping_cart_icon.svg"
import './../Mission_card/Mission_card.css';

function Mission_card() {

    const mission_content= {
        missionTitle: "Faire les courses",
        missionDate : "29/03/2022 à 14h30",
        missionDuration : "1 heure"

    }
    return (

        <div>
            <div className="mission_card">
                <div className='mission_card_text small_Text'>
                    <div className="mission_first_raw">
                        <img src={shopping_cart}/>
                        <h4 className='title_green'>{mission_content["missionTitle"]}</h4>
                    </div>
                    <div className="mission_second_raw">
                        <div className='mission_first_column'>
                            <p>Le: {mission_content["missionDate"]}</p>
                            <p>Pendant: {mission_content["missionDuration"]}</p>
                            <a className='bnt_round mission_bnt_round' href="#">Postuler</a>
                        </div>
                        <a className="mission_details" href="#">Détails</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mission_card;