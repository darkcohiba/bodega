import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function CurrentInventoryList({inventory, handleDelete, addItemToReorderList}) {
    // console.log(inventory)
    const inventoryItems = inventory.map((item) => <InventoryItemCard 
        key={item.id} 
        item={item} 
        handleDelete={handleDelete}
        addItemToReorderList={addItemToReorderList} 
    />)

    
    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {inventoryItems}
            </div>
        </div>
    );
}

export default CurrentInventoryList;