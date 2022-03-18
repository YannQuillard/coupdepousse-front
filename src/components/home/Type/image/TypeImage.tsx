import React, { useState } from 'react';
import "./TypeImage.css"


const TypeImage = (props: any) => {
	console.log(props.typeImageUrl);
	
	return (
		<img src={props.typeImageUrl}/>
	);
}

export default TypeImage;