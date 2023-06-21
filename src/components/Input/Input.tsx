import React from "react"

import './input.css'

interface InputProps {
    message: string
    setMessage: React.Dispatch<React.SetStateAction<string>>
    sendMessage: (e: React.KeyboardEvent<HTMLInputElement> 
        | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Input = ({ message, setMessage, sendMessage }: InputProps) => {
    return (
        <form className="form">
            <input 
                type="text" 
                className="input"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? sendMessage(e) : null}
            />
            <button className="sendButton" onClick={e => sendMessage(e)}>send</button>
        </form>
    )
}

export default Input