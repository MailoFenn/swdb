import React from 'react';

import './ItemList.css';
import Spiner from "../Spiner/Spiner";

const ItemList = ({state, loading, onPersonClick}) => {
    const items = !loading ? state.map(i => {
        return(
            <li
                className="list-group-item"
                key={i.id}
                onClick={() => {
                    onPersonClick(i.id)
                }}
            >
                {i.name}
            </li>
        )
    }) : null

    const spinner = loading ? <Spiner/> : null
    return (
        <ul className="item-list list-group">
            {items}
            {spinner}
        </ul>
    );
}

export default ItemList
