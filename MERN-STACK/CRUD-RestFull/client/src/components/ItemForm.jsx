import { useState } from "react";

const ItemForm = ({onSubmit}) => {
    const [name, setName] = useState('')
    const [quantity,setQuantity] = useState(1)

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({name,quantity})
        setName('');setQuantity(1)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required/>
                <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Quantity" required min="1" />
                <button type="submit">Add</button>
            </form>
        </>
    )
}
export default ItemForm