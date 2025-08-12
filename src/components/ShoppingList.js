import React from "react";
import Item from "./Item";
import {useState} from "react"

function ShoppingList({ items }) {

 const [selectedCategory,typeOfCategory]= useState("All")

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={(e) => typeOfCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          (item.category === selectedCategory || selectedCategory === "All") ? (
            <Item key={item.id} name={item.name} category={item.category} />
          ) : null
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
