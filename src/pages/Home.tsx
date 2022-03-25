import React, { useState } from 'react';
import "./Home.css"
import '../App.css';
import Type from "../components/home/Type/Type"
import Header from "../components/Header/Header"
import oldImage from "../assets/img/old.png"
import youngImage from "../assets/img/young.png"

const imagesUrl = {
	oldImageUrl : oldImage,
	youngImageUrl : youngImage
}
const personType = {
	senior : "Un senior",
	young : "Un jeune"
}

const Home = () => {
	return (
		<div className="homeContainer">
			<div className="typeChoose">
				<span>Je suis ?</span>
			</div>
			<div className="homeMain">
				<Type typeSide="seniorSide" buttonColor="greenButton" personType={personType["senior"]} typeImageUrl={imagesUrl["oldImageUrl"]} linkUrl ="/oldmenu" />
				<Type typeSide="youngSide" buttonColor="yellowButton" personType={personType["young"]} typeImageUrl={imagesUrl["youngImageUrl"]} linkUrl="/youngmenu" />
			</div>
		</div>
	);
}

export default Home;