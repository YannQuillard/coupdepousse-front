import React, { useState } from 'react';
import "./TypeImage.css"

const TypeImage = (props: any) => {	
	return (
		<img src={props.typeImageUrl}/>
	);
}

export default TypeImage;