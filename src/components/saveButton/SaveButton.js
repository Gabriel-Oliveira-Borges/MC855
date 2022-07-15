import React, { useState } from 'react'
import './SaveButton.css'

function SaveButton({onClick, text}) {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        onClick()
        setClicked(true)
        setTimeout(function() {
            setClicked(false)
        }, 1500)
    }

    return (
        <div>
            <button className={`SaveButton ui button ${clicked ? 'clicked' : ''}`} onClick={handleClick}>{text}</button>
            <div className={`SavedMessage ${clicked ? 'clicked' : ''}`}>
                <p>Mudanças salvas!</p>
            </div>
        </div>
    )
}

export default SaveButton;