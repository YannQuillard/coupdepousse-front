import React, { useState } from 'react';
import "./Home.css"
import '../App.css';
import Type from "../components/home/Type/Type"
import Header from "../components/Header/Header"
// import logo from "../assets/img/logo.png"
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
			<Header/>
			<div className="typeChoose">
				<span>Je suis ?</span>
			</div>
			<div className="homeMain">
				<Type typeSide="seniorSide" buttonColor="greenButton" personType={personType["senior"]} typeImageUrl={imagesUrl["oldImageUrl"]} />
				<Type typeSide="youngSide" buttonColor="yellowButton" personType={personType["young"]} typeImageUrl={imagesUrl["youngImageUrl"]} />
			</div>
		</div>
	);
}

export default Home;