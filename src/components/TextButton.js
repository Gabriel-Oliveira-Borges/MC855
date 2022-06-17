import React from 'react'
import { Link } from 'react-router-dom'
import './TextButton.css'

const TextButton = (props) => {
    return (
        <div className='ui text container text-button'>
            <Link className='link' to={props.link}>
                {props.text}
            </Link>
        </div>
    )
}

TextButton.defaultProps = {
    link: "/especialidades",
    text: "Ver especialidades do ambulatório de pediatria"
}

export default TextButton;