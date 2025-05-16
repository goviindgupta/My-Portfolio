import React from "react";

const ItemList = ({items,onUpdate,onDelete}) => {
    
    return (
        <>
            <ul>
                {items.map(item => {
                    return (
                        <li key={item._id}>
                            <span>{item.name} (x{item.quantity})</span>
                            <button onClick={() => onUpdate(item._id,{quantity: item.quantity + 1})}>
                            +1
                            </button>
                            <button onClick={() => onDelete(item._id)}>🗑️</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
export default ItemList