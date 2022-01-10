import React from 'react';

import './RandomPlanet.css';
import Spiner from "../Spiner/Spiner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const RandomPlanet = ({state, loading, isError}) => {
    const hasData = !(loading || isError)

    const errorMessage = isError ? <ErrorMessage/> : null
    const spinner = loading ? <Spiner/> : null
    const content = hasData ? <RandomPlanetContent planet={state}/> : null

    return (
        <div className="random-planet jumbotron rounded">
            {spinner}
            {content}
            {errorMessage}
        </div>
    );
}

const RandomPlanetContent = ({planet}) => {
    const {name, population, id, rotationPeriod, diameter} = planet
    return (
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt={'title'}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default RandomPlanet
