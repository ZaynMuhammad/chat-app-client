import React from 'react'
import './messages.css'
import ScrollToBottom from 'react-scroll-to-bottom'

import Message from '../Message/Message'

interface MessagesProps {
    messages: ({ user: string, text: string })[]
    name: string | (string | null)[] | null
}

const Messages = ({ messages, name }: MessagesProps) => {
    return (
        <ScrollToBottom className='messages'>
            {messages.map((message, i) => <div key={i}>
                <Message 
                    user={message.user}
                    text={message.text}
                    name={name}
                />
            </div>)}
        </ScrollToBottom>
    )
}

export default Messages