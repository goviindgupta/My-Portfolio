import { useState, useEffect } from "react";
import {api} from './api';
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'
import './App.css'

const App = () => {
  const [items,setItems] = useState([]);

  useEffect(() => {
    api.get('/items').then(res => setItems(res.data))
  },[])

  const addItem = async item => {
    const res = await api.post('/items',item)
    setItems(prev => [...prev,res.data])
  }

  const updateItem = async (id,data) => {
    const res = await api.put(`/items/${id}`,data);
    setItems(prev => prev.map(it => it._id === id ? res.data : it))
  }

  const deleteItem = async id => {
    await api.delete(`/items/${id}`)
    setItems(prev => prev.filter(it => it._id != id))
  }

  return (
    <>
      <div className="App">
        <h1 className="Inventory"></h1>
        <ItemForm onSubmit={addItem}/>
        <ItemList
          items = {items}
          onUpdate = {updateItem}
          onDelete = {deleteItem}
        />
      </div>
    </>
  )
}

export default App;