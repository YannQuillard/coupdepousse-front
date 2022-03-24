import React, { useState } from "react";
import Header from "../../components/Header/Header";

import './Young_Landing.css';
import grocerie_icon from "../../assets/images/grocerie_icon.svg"
import walk_icon from "../../assets/images/walk_icon.svg"
import tchat_icon from "../../assets/images/tchat_icon.svg"
import doctor_icon from "../../assets/images/doctor_icon.svg"
import arrow_down from "../../assets/images/arrow_down.svg"

import ButtonFilter from "./Button";
import Message from "./Message";
import MapComponent from "../Map/Map";



function Young_Landing() {
    return (
        <div className="young_landing">
            <Header color='Black' ></Header>
            <div className="young_landing_content">
                <div className="landing_left_column">
                    <h3 className='title_green'>Filtres</h3>
                    <div className="landing_icon">
                        <img src={grocerie_icon}/>
                        <img src={walk_icon}/>
                        <img src={tchat_icon}/>
                        <img src={doctor_icon}/>
                    </div>
                    <div className="filter_button_container">
                        <div className="filter_button">
                            <ButtonFilter filter_str=" Courses"></ButtonFilter>
                            <ButtonFilter filter_str=" Passer le temps"></ButtonFilter>
                            <ButtonFilter filter_str=" Promenade"></ButtonFilter>
                            <ButtonFilter filter_str=" Médecin"></ButtonFilter>
                            <ButtonFilter filter_str=" Ménage"></ButtonFilter>
                            <ButtonFilter filter_str=" Papier administratifs"></ButtonFilter>
                            <ButtonFilter filter_str=" Jeux de société"></ButtonFilter>
                            <ButtonFilter filter_str=" Travaux"></ButtonFilter>
                            <ButtonFilter filter_str=" Informatique"></ButtonFilter>
                        </div>
                    </div>
                    <div className="less_filter">
                        <a><span>- de filtres</span> <img src={arrow_down}/> </a>
                    </div>
                </div>
                <MapComponent></MapComponent>
                <div className="landing_right_column">
                    <h3 className='title_green'>Messagerie</h3>
                    <Message 
                        TaskContent="Faire ses courses"
                        AvatarUrl="https://img.freepik.com/photos-gratuite/portrait-belle-femme-agee-aux-cheveux-gris-garde-main-bord-lunettes-sourit-joyeusement_273609-50072.jpg"
                    ></Message>
                    <Message 
                        TaskContent="Faire ses courses"
                        AvatarUrl="https://img.freepik.com/photos-gratuite/portrait-belle-femme-agee-aux-cheveux-gris-garde-main-bord-lunettes-sourit-joyeusement_273609-50072.jpg"
                    ></Message>
                    <Message 
                        TaskContent="Faire ses courses"
                        AvatarUrl="https://img.freepik.com/photos-gratuite/portrait-belle-femme-agee-aux-cheveux-gris-garde-main-bord-lunettes-sourit-joyeusement_273609-50072.jpg"
                    ></Message>
                    <Message 
                        TaskContent="Faire ses courses"
                        AvatarUrl="https://img.freepik.com/photos-gratuite/portrait-belle-femme-agee-aux-cheveux-gris-garde-main-bord-lunettes-sourit-joyeusement_273609-50072.jpg"
                    ></Message>
                    <Message 
                        TaskContent="Faire ses courses"
                        AvatarUrl="https://img.freepik.com/photos-gratuite/portrait-belle-femme-agee-aux-cheveux-gris-garde-main-bord-lunettes-sourit-joyeusement_273609-50072.jpg"
                    ></Message>
                    <Message 
                        TaskContent="Faire ses courses"
                        AvatarUrl="https://img.freepik.com/photos-gratuite/portrait-belle-femme-agee-aux-cheveux-gris-garde-main-bord-lunettes-sourit-joyeusement_273609-50072.jpg"
                    ></Message>
                    <Message 
                        TaskContent="Faire ses courses"
                        AvatarUrl="https://img.freepik.com/photos-gratuite/portrait-belle-femme-agee-aux-cheveux-gris-garde-main-bord-lunettes-sourit-joyeusement_273609-50072.jpg"
                    ></Message>
                    <Message 
                        TaskContent="Faire ses courses"
                        AvatarUrl="https://img.freepik.com/photos-gratuite/portrait-belle-femme-agee-aux-cheveux-gris-garde-main-bord-lunettes-sourit-joyeusement_273609-50072.jpg"
                    ></Message>
                </div>
                
            </div>
        </div>
    );
}

export default Young_Landing;