import React, { useState } from 'react';
import "./TypeButton.css"

const TypeButton = (props: any) => {	
	return (
		<a
			className={`buttonType ${props.buttonColor}`} href="#">
			{props.personType}
		</a>
	);
}

export default TypeButton;