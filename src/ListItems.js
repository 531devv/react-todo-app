import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>{item.text}</p>
            <span><FontAwesomeIcon icon={faTrashAlt} onClick={() => props.deleteItem(item.key)}/></span>
            </div>
    })
    return(
        <div className="list-container">
            {listItems}
        </div>
    )
}

export default ListItems;