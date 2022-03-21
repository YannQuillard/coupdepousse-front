import React, { useState } from 'react';
import "./Type.css"
import TypeImage from "./image/TypeImage"
import TypeButton from "./button/TypeButton"

const Type = (props: any) => {
		return (
			<div className={`type ${props.typeSide}`}>
				<TypeImage typeImageUrl = {props.typeImageUrl} />
				<TypeButton className={`buttonType`} buttonColor = {props.buttonColor} personType = {props.personType} />
			</div>
	);
}

export default Type;