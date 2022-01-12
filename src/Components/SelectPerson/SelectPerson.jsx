import React from "react";
import person from './darth_vader.svg'
import './SelectedPerson.css'

const SelectPerson = () => {
    return(
        <div className={'person-container card'}>
            <img
                alt={'person'}
                src={person}
                className={'person'}
            />
            <h3>Select a person</h3>
        </div>
    )
}

export default SelectPerson