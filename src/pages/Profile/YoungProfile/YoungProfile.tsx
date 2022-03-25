import React, { useState } from 'react';
import "./YoungProfile.css"
import '../../../App.css';
import Header from "../../../components/Header/Header"
import profilePic from "../../../assets/images/senior2.png"

const YoungProfile = () => {
	return (
		<div>
			<Header color="Black"/>
			<div className="youngProfileContainer">
			<div className='youngProfileLeft'>
				<div className='youngProfileIntro'>
					<img src={profilePic}></img>
					<div className='youngProfileIntroRight'>
						<h3 className='youngProfileFName'>Suzanne</h3>
						<span>Date d'inscription</span>
						<span>Ville</span>
					</div>
				</div>
				<div className='youngProfileInformations'>
					<h2>Informations</h2>
					<a className='youngProfileModify' href="#">Modifier</a>
				</div>
					<span className='champ youngProfileFName'>Prénom</span>
					<span className='champ youngProfileLName'>Nom</span>
					<span className='champ youngProfileAdress'>Adresse</span>
					<span className='champ youngProfileBday'>Date de naissance</span>
					<span className='champ youngProfileCode'>Code postal</span>
					<span className='champ youngProfileCity'>Ville</span>
					<span className='champ youngProfilePhone'>N° de téléphone</span>
			</div>
			<div className='youngProfileRight'>
			</div>
			</div>
		</div>
	);
}

export default YoungProfile;