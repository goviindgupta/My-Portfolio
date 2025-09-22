// src/App.jsx
import { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

// 1) Queries & Mutations
const GET_ITEMS = gql`
  query GetItems {
    items {
      _id
      name
      quantity
    }
  }
`;

const CREATE_ITEM = gql`
  mutation CreateItem($input: ItemInput!) {
    createItem(input: $input) {
      _id
      name
      quantity
    }
  }
`;

const UPDATE_ITEM = gql`
  mutation UpdateItem($id: ID!, $input: ItemInput!) {
    updateItem(id: $id, input: $input) {
      _id
      name
      quantity
    }
  }
`;

const DELETE_ITEM = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id) {
      _id
    }
  }
`;

const App = () => {
  // 2) Hook up Apollo Client
  const { loading, error, data, refetch } = useQuery(GET_ITEMS);
  const [createItem] = useMutation(CREATE_ITEM);
  const [updateItem] = useMutation(UPDATE_ITEM);
  const [deleteItem] = useMutation(DELETE_ITEM);

  // 3) Local state for the "Add" form
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  // 4) Handle loading / errors
  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error: {error.message}</p>;

  // 5) Add new item
  const handleAdd = async (e) => {
    e.preventDefault();
    await createItem({
      variables: { input: { name, quantity } },
    });
    setName("");
    setQuantity(1);
    refetch(); // reload the list
  };

  // 6) Update item quantity, **preserving** its name**
  const handleUpdate = async (id, currentName, newQty) => {
    await updateItem({
      variables: {
        id,
        input: {
          name: currentName,  // keep the same name
          quantity: newQty,
        },
      },
    });
    refetch();
  };

  // 7) Delete an item
  const handleDelete = async (id) => {
    await deleteItem({ variables: { id } });
    refetch();
  };

  // 8) Render
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Graph Inventory</h1>

      {/* Add Form */}
      <form onSubmit={handleAdd} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
          min="1"
        />
        <button type="submit">Add</button>
      </form>

      {/* Item List */}
      <ul>
        {data.items.map((item) => (
          <li key={item._id} style={{ marginBottom: "0.5rem" }}>
            {item.name} (x{item.quantity}){" "}
            <button
              onClick={() =>
                handleUpdate(item._id, item.name, item.quantity + 1)
              }
            >
              +1
            </button>{" "}
            <button onClick={() => handleDelete(item._id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
