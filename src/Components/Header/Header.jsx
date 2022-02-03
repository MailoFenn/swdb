import React from "react";
import "./Header.css"

const Header = ({getAllPlanet, getAllPerson, getAllStarship}) => {
    return (
        <div className={'header d-flex'}>
            <h3>
                <a href="#">
                    StarDB
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a href="#" onClick={() => {
                        getAllPerson()
                    }
                    }>People</a>
                </li>
                <li>
                    <a href='#' onClick={() => {
                        getAllPlanet()
                    }}>Planets</a>
                </li>
                <li>
                    <a href="#" onClick={() => {
                        getAllStarship()
                    }
                    }>Starships</a>
                </li>
            </ul>
        </div>
    )
}

export default Header