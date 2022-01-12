import React from 'react';

import './PersonDetail.css';
import SelectPerson from "../SelectPerson/SelectPerson";

const Person = ({selectedItem}) => {
    return(
        <div className="person-details card">
            <img alt={'person photo'}
                 src={`https://starwars-visualguide.com/assets/img/characters/${selectedItem.id}.jpg`}
                 className="person-image"
            />

            <div className="card-body">
                <h4>{selectedItem.name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>43</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>red</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const PersonDetail = ({selectedItem, selectedId}) => {
    const person = selectedId ? <Person selectedItem={selectedItem}/> : null
    const spinner = selectedId === null ? <SelectPerson/> : null
    return (
        <React.Fragment>
            {person}
            {spinner}
        </React.Fragment>
    )
}

export default PersonDetail
