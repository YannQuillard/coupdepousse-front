import React, { useState } from 'react';
import "./OldMenu.css"
import '../../../App.css';
import Header from "../../../components/Header/Header"
import MenuButton from '../../../components/menu/MenuButton/MenuButton';

const OldMenu = (props: any) => {
	return (
		<div className="OldMenuContainer">
			<Header color="Black"/>
			<div className='ButtonsContainer'>
				<div>
					<MenuButton buttonColor="greenButton" buttontext="Inscription" hrefUrl="/signup" />
					<MenuButton buttonColor="greenButton" buttontext="Connexion" hrefUrl="/login"/>
				</div>
				<span className="OldMenuChoice">OU</span>
				<a className="ConnectByNum">Envoyez CDP au 3070</a>
			</div>
		</div>
	);
}

export default OldMenu;