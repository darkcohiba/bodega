import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function ReorderInventoryList({reorderInventoryList, handleDelete, removeItemFromReorderList}) {

    const inventoryItems = reorderInventoryList.map((item) => <InventoryItemCard 
        key={item.id} 
        item={item} 
        handleDelete={handleDelete} 
        addItemToReorderList={removeItemFromReorderList} 
    />)

    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {inventoryItems}
            </div>
        </div>
    );
}

export default ReorderInventoryList;