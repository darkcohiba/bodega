import React from 'react'

function InventoryItemCard({item, handleDelete, addItemToReorderList}) {
    return(
        <div className="card" onClick={() => addItemToReorderList(item)}>
            <img src={item.image}></img>
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            <button onClick={() => handleDelete(item)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;