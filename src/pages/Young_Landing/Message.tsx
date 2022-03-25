import React from "react";
import './Young_Landing.css';

interface MessagesProps {
    TaskContent: string,
    AvatarUrl: string
    Name: string
}


function Message(props: MessagesProps) { 
    return (
        <div className="message">
            <img
            src={props.AvatarUrl}
            className="userImg"
            />
            <div className="messageContent">
                <p className="messageTitle">{props.Name}</p>
                <p className="taskContent">
                    <i>À besoin d’aide pour : </i>
                    <b>{props.TaskContent}</b>
                </p>
            </div>
        </div>
    )
}

export default Message