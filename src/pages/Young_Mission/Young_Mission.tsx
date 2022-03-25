import React from 'react';
import './Young_Mission.css';
import Mission_Card from '../../components/Mission_card/Mission_card';
import senior_img from "../../assets/images/Senior_img.jpg"
import Header from '../../components/Header/Header';

function Young_Mission() {
    return (
        <div className="young_mission container">
            <Header color="Black"/>
            <div className="senior_profil small_Text">
                <img alt="senior profile picture"src={senior_img}/>
                <div>
                    <h3 className='title_green'>Josiane</h3>
                    <p>Inscrite depuis 2022</p>
                    <p>Paris, Odéon</p>
                </div>
            </div>
            <h2>Missions</h2>
            <div className="card">
                <div className='card_first_raw'>
                    <Mission_Card></Mission_Card>
                    <Mission_Card></Mission_Card>
                    <Mission_Card></Mission_Card>
                </div>
                <div className='card_second_raw'>
                    <Mission_Card></Mission_Card>
                    <Mission_Card></Mission_Card>
                    <Mission_Card></Mission_Card>
                </div>
            </div>
        </div>
    );
}

export default Young_Mission;