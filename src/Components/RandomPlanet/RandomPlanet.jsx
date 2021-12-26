import React from 'react';

import './RandomPlanet.css';

const RandomPlanet = () => {
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/12.jpg`} />
        <div>
          <h4>{'Tatooin'}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{'12000'}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{'23'}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{'125900'}</span>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default RandomPlanet
