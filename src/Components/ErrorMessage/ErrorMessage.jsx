import React from "react";

import icon from './death_star.svg'
import './ErrorMessage.css'

const ErrorMessage = () => {
    return (
        <div className={'error-message'}>
                <img src={icon} alt={'icon'} className={'icon'}/>
                <h2>Oops! Something crashed...</h2>
                <h4 className={'label'}>Droids fix it already.</h4>
        </div>
    )
}

export default ErrorMessage