import React, { useState } from 'react';
import "./MessageTalk.css"
import '../../../App.css';

const MessageTalk = () => {
	return (
		<div className='Message'>
			<div className='MessageHeader'>
				<div className='MessagePP'></div>
				<div className='MessageAuthor'>Jérémie</div>
			</div>
			<div className='MessageContent'>
				Bonsoir Martine, je vous contacte au sujet des courses de vendredi. J’ai quelques questions à vous poser.
			</div>
		</div>
	);
}

export default MessageTalk;