import React, { useState } from 'react';
import "./ProfileChat.css"
import '../../../App.css';
import MessageItem from '../MessageItem/MessageItem';
import MessageTalk from '../MessageTalk/MessageTalk';

const ProfileChat = () => {
	return (
		<div className='lol'>
			<div className='ChatTop'>
				<div className='ProfileChatHeader'>
					<MessageItem/>
					<div className='MessageMission'>
						<div className='GenericText1'>Date de la mission</div>
						<div className='GenericText2'>Lundi 4 Avril</div>
						<div className='GenericText3'>à 18h05</div>
					</div>
				</div>
				<MessageTalk/>
			</div>
			<div className='ChatBot'>
				<form className='ChatTalk'>
					<input type="text"
					className='ChatInput'
					placeholder="Rédiger un message"/>
					<input type="submit"
					className='ChatSubmit'
					placeholder="Envoyer"/>
				</form>
			</div>
		</div>
	);
}

export default ProfileChat;