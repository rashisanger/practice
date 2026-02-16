import React, { useRef, useState } from 'react';

const FocusTracker = () => {
    const [messages, setMessages] = useState([]);
    const [currMessage, setCurrMessage] = useState('');
    const [focusCount, setFocusCount] = useState(0);

    const inputRef = useRef(null);

    const handleChange = (e) => {
        setCurrMessage(e.target.value);
    };
    const handleFocus = () => {
        setFocusCount(prev => prev + 1);
    };

    const focusInput = () => {
        inputRef.current.focus();
    };

    const submitMessage = () => {
        if (currMessage.trim() !== '') {
            setMessages(prev => [...prev, currMessage]);
            setCurrMessage('');
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            submitMessage();
        }
    };

    return (
        <div>
            <h1>Focus Tracker & Message History</h1>

            <input
                ref={inputRef}
                type="text"
                placeholder="Type message..."
                value={currMessage}
                onChange={handleChange}
                onFocus={handleFocus}
                onKeyDown={handleKeyPress}
                
            />

            <button onClick={submitMessage}>
                Submit
            </button>
            <button onClick={focusInput}>
                Focus Input
            </button>

            <p><strong>Focus count:</strong> {focusCount}</p>

            <h3>Messages:</h3>
            <ul>
                {messages.length > 0 ? (
                    messages.map((msg, idx) => <li key={idx}>{msg}</li>)
                ) : (
                    <li>No messages yet</li>
                )}
            </ul>
        </div>
    );
};

export default FocusTracker;
