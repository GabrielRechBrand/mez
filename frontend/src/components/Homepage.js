import React from "react";
import MessageInput from "./MessageInput";

const Homepage = () => {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex-grow">
            </div>
            <div className="fixed bottom-0 inset-x-0 px-4 pb-4 flex justify-center">
                <MessageInput/>
            </div>
        </div>
    );
}

export default Homepage;