import React, { useState } from 'react';
import "./YoungMenu.css"
import '../../../App.css';
import Header from "../../../components/Header/Header"
import MenuButton from '../../../components/menu/MenuButton/MenuButton';

const YoungMenu = (props: any) => {
	return (
		<div className="YoungMenuContainer">
			<Header color="White"/>
			<div className='ButtonsContainer'>
				<MenuButton buttonColor="yellowButton" buttontext="Inscription" hrefUrl="/signup"/>
				<MenuButton buttonColor="yellowButton" buttontext="Connexion" hrefUrl="/login"/>
			</div>
		</div>
	);
}

export default YoungMenu;