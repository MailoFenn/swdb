import React from 'react';

import './ItemList.css';

const ItemList = ({state}) => {
    const items = state.map(i => {
        return(
            <li className="list-group-item">
                {i.name}
            </li>
        )
    })
    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

export default ItemList
