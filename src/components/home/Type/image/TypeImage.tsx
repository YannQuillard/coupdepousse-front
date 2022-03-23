import React, { useState } from 'react';
import "./TypeImage.css"

const TypeImage = (props: any) => {	
	return (
		<img className='home_image_category' src={props.typeImageUrl}/>
	);
}

export default TypeImage;