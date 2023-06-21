import React from 'react'
import { ParsedQuery } from 'query-string'

import './infobar.css'

interface InfoBarProps {
    room: string | (string | null)[] | null
}

const InfoBar = ({ room }: InfoBarProps) => {
    return (
        <div className='infoBar'>
            <div className='leftInnerContainer'>
                <img className='onlineIcon' src='./onlineIcon.png' alt="online image" />
                <h3>{room}</h3>
            </div>
            <div className='rightInnerContainer'>
                <a href="/"><img src='./closeIcon.png' alt="close image" /></a>
            </div>
        </div>
    )
}

export default InfoBar