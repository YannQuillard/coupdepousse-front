import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./TypeButton.css"

const TypeButton = (props: any) => {
	const navigate = useNavigate();

	const handleClick = (route: string) => {
		navigate(route);
	}

	return (
		<a
			className={`buttonType ${props.buttonColor}`} href={props.linkUrl}>
			{props.personType}
		</a>
	);
}

export default TypeButton;