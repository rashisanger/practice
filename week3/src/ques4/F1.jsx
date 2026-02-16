import React, { useState, useRef } from "react";

const FocusTracker = () => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const [focusCount, setFocusCount] = useState(0);

    const inputRef = useRef(null);
    const previousMessages = useRef([]);

    const handleChange = (e) => setCurrentMessage(e.target.value);

    const handleFocus = () => setFocusCount((prev) => prev + 1);

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && currentMessage.trim() !== "") {
            previousMessages.current.push(currentMessage);
            setMessages([...previousMessages.current]);
            setCurrentMessage("");
        }
    };

    const focusInput = () => inputRef.current.focus();

    return (
        <div>
            <h1>Focus Tracker</h1>

            <input
                ref={inputRef}
                type="text"
                value={currentMessage}
                onChange={handleChange}
                onFocus={handleFocus}
                onKeyPress={handleKeyPress}
                placeholder="Type message and press Enter"
            />

            <button onClick={focusInput}>Focus Input</button>

            <p>Total Focus Count: {focusCount}</p>

            <h3>Message History:</h3>
            <ul>
                {messages.length > 0
                    ? messages.map((msg, idx) => <li key={idx}>{msg}</li>)
                    : <li>No messages yet</li>}
            </ul>
        </div>
    );
};

export default FocusTracker;
