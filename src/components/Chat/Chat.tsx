import React, { useState, useEffect } from "react"
import queryString, { ParsedQuery } from 'query-string'
import { io, Socket } from 'socket.io-client'
import { useLocation, Location } from 'react-router-dom'

import InfoBar from "../InfoBar/InfoBar"
import Input from "../Input/Input"
import Messages from "../Messages/Messages"

import './chat.css'

let socket: Socket

const Chat = ({}) => {
    const location: Location = useLocation()
    const [name, setName] = useState<string | (string | null)[] | null>('')
    const [room, setRoom] = useState<string | (string | null)[] | null>('')
    const [messages, setMessages] = useState<({ user: string, text: string })[]>([])
    const [message, setMessage] = useState<string>('')
    const ENDPOINT = 'https://chat-server-zayn.up.railway.app'

    useEffect(() => {
        const { name, room }: ParsedQuery<string> = queryString.parse(location.search)

        setName(name)
        setRoom(room)
        socket = io(ENDPOINT)

        socket.emit('join', { name, room }, () => {

        })

        return () => {
            socket.disconnect()

            socket.off()
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])

    const sendMessage = (e: React.KeyboardEvent<HTMLInputElement> 
        | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        if (message)
            socket.emit('sendMessage', message, () => setMessage(''))
    }

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />               
            </div>
        </div>
    )
}

export default Chat