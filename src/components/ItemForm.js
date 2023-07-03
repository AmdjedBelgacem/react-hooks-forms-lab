import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({onItemFormSubmit}) {
  const [ newData, setNewData] = useState({
    name: "",
    category: "Produce",
  });
  function HandleSubmit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: newData.name,
      category: newData.category,
    };
    onItemFormSubmit(newItem)
    setNewData({
      name: "",
      category: "Produce",
    });
  }
  
  return (
    <form className="NewItem" onSubmit={event=>HandleSubmit(event)}>
      <label>
        Name:
        <input type="text" name="name" onChange={event=>{
          setNewData({
            ...newData, 
            name: event.target.value
          })
        }}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={event=> {
          setNewData({
            ...newData, 
            category: event.target.value
          })
        }}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
