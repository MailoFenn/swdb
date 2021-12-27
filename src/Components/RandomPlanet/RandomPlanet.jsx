import React from 'react';

import './RandomPlanet.css';

const RandomPlanet = ({state, id}) => {
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}  alt={'title'}/>
        <div>
          <h4>{state.name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{state.population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{state.rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{state.diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default RandomPlanet
