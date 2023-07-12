import React, { useEffect, useState } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {
    const [inventory, setInventory] = useState([])
    const [reorderInventoryList, setReorderInventoryList] = useState([])

    useEffect(() => {
        fetch("http://localhost:8001/inventory")
        .then(res => res.json())
        .then(data => setInventory(data))
    }, [])

    function handleDelete(item) {
        // console.log(item)
        fetch(`http://localhost:8001/inventory/${item.id}`, {
            method: "DELETE"
        });
        removeItemFromInventory(item)
        removeItemFromReorderList(item)
    }

    function addItemToReorderList(item){
        if (reorderInventoryList.includes(item)) {
            alert("Item already in the list")
        }else{
            setReorderInventoryList([...reorderInventoryList, item])
        }
    }

    function removeItemFromInventory(item){
        setInventory(inventory.filter(i => i !== item))
    }

    function removeItemFromReorderList(item){
        setReorderInventoryList(reorderInventoryList.filter(i => i !== item))
    }
    

    return(
        <div className="container">
            <CurrentInventoryList inventory={inventory} handleDelete={handleDelete} addItemToReorderList={addItemToReorderList}/>
            <ReorderInventoryList reorderInventoryList={reorderInventoryList} handleDelete={handleDelete} addItemToReorderList={removeItemFromReorderList}/>
        </div>
    );
}

export default InventoryManager;