import React, { useState } from 'react';
import "./Profile.css"
import '../../App.css';
import Header from "../../components/Header/Header"
import profilePic from "../../assets/images/senior2.png"
import MessageItem from "../../components/Chat/MessageItem/MessageItem"
import ProfileChat from '../../components/Chat/ProfileChat/ProfileChat';

const OldProfile = () => {
	return (
		<div className='ProfileContainer'>
			<Header color="Black"/>
			<div className="OldProfileContainer">
				<div className='OldProfileLeft'>
					<div className='OldProfileIntro'>
						<img src={profilePic}></img>
						<div className='OldProfileIntroRight'>
							<h3 className='OldProfileFName'>Suzanne</h3>
							<span>Date d'inscription</span>
							<span>Ville</span>
						</div>
					</div>
					<div className='OldProfileInformations'>
						<h2>Informations</h2>
						<a className='OldProfileModify' href="#">Modifier</a>
					</div>
						<span className='champ OldProfileFName'>Prénom</span>
						<span className='champ OldProfileLName'>Nom</span>
						<span className='champ OldProfileAdress'>Adresse</span>
						<span className='champ OldProfileBday'>Date de naissance</span>
						<span className='champ OldProfileCode'>Code postal</span>
						<span className='champ OldProfileCity'>Ville</span>
						<span className='champ OldProfilePhone'>N° de téléphone</span>
				</div>
				<div className='OldProfileRight'>
					<h4>Messagerie</h4>
					{/* <div className='OldProfileMessages'>
						<MessageItem/>
						<MessageItem/>
						<MessageItem/>
					</div> */}
					<ProfileChat/>
				</div>
			</div>
		</div>
	);
}

export default OldProfile;
