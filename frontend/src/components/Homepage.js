import React, {useEffect, useRef, useState} from "react";
import './MessageInput.css';
import './Homepage.css';

const Homepage = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const chatBoardRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setMessages([...messages, inputValue]);
            setInputValue("");
        }
    };

    const scrollToBottom = () => {
        if (chatBoardRef.current) {
            chatBoardRef.current.scrollTop = chatBoardRef.current.scrollHeight;
        }
    };

    // Scroll to bottom whenever new messages are added
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="w-full h-screen flex flex-col justify-between">
            <div className="flex-grow flex flex-col justify-start items-center p-4 space-y-4 overflow-y-auto">
                <div className="chat-board w-full p-4">
                    {messages.map((message, index) => (
                        <div key={message + index} className="flex message border p-2 mb-2">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="avatar"
                                className="avatar mr-2"
                            />
                            <div className="message p-2">
                                {message}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="scroll-to-bottom-btn" onClick={scrollToBottom}>
                    <span className="material-symbols-outlined">
                        arrow_downward
                    </span>
                </button>
            </div>
            <div className="fixed bottom-0 inset-x-0 px-4 pb-4 flex justify-center">
                <form className="message-input-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="message-input"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" className="message-input-send">
                        SEND
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Homepage;
