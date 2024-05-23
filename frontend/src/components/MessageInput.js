import React from "react";
import './MessageInput.css';

const MessageInput = props => {
    return (
        <form className="message-input-form">
            <input
                type="text"
                placeholder="Type your message..."
                value={props.message}
                onChange={props.handleMessageChange}
                className="message-input"
            />
            <button className="message-input-send">
                SEND
            </button>
        </form>
    );
}

export default MessageInput;