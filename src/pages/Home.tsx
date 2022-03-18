import React from 'react';
import "./Home.css"
import '../App.css';
import Type from "../components/home/Type/Type"

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
		<div className="home">
		<Type color="yellowBG" buttonColor="greenButton" personType={personType["senior"]} typeImageUrl={imagesUrl["oldImageUrl"]} />
		<Type color="greenBG" buttonColor="yellowButton" personType={personType["young"]} typeImageUrl={imagesUrl["youngImageUrl"]} />
		</div>
	);
}

export default Home;