import React, { useState } from 'react';
import "./MenuButton.css"

const MenuButton = (props: any) => {
	return (
		<a
			className={`MenuButton ${props.buttonColor}`} href="#">
				{props.buttontext}
		</a>
	);
}

export default MenuButton;