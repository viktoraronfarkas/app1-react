import React, { useState, useEffect } from "react";
import "./ItemList.css"; // Don't forget to add this CSS file in the same directory

// Measure the time just before the component is added to the DOM
let preRenderTime = performance.now();

function ItemList() {
  const [items, setItems] = useState(["Item 1", "Item 2"]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    preRenderTime = performance.now();
    setItems([...items, newItem]);
    setNewItem("");
  };

  useEffect(() => {
    // Measure the time right after the component has been added to the DOM
    const postRenderTime = performance.now();
    console.log(
      `Component rendering time: ${postRenderTime - preRenderTime} ms`
    );
  }, []); // Empty dependency array ensures this runs only once after the initial render

  useEffect(() => {
    // Measure the time right after the new item has been added to the DOM
    const postRenderTime = performance.now();
    console.log(
      `New item component rendering time: ${postRenderTime - preRenderTime} ms`
    );
  }, [items]); // Empty dependency array ensures this runs only once after the initial render

  return (
    <div>
      <h1>Item List</h1>
      {items.length ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items available.</p>
      )}
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default ItemList;
