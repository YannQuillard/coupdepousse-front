import React, { useState } from 'react';
import "./MessageItem.css"
import '../../App.css';

const MessageItem = (props: any) => {
	return (
		<div className='messageItem'>
			<span className='img'></span>
			<div className='messageItemRight'>
				<span className='messageItemName'>Prénom</span>
				<span className='messageItemHt'>Vous aide à : </span>
				<span className='messageItemHelp'>Faire qlque chose</span>
			</div>
		</div>
	);
}

export default MessageItem;