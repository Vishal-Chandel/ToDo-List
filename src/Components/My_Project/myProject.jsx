import "./myProject.css";
import { useState } from "react";

export default function MyProject() {
  const [items, setItems] = useState([]);

  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  return (
    <div className="contanier">
      <h1 classsName="heading-1">ToDo List</h1>
      <div className="shopping-list">
        <h2 className="heading-2">Add Todo</h2>
        <form onSubmit={onSubmit}>
          <input
          className="input-field"
            type="text"
            name="item"
            placeholder="Add to new ToDo"
            required
          />
          <button className="btn-1">Add ToDo</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Todo onRemoveItem={onRemoveItem} key={item + index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Todo({ item, onRemoveItem }) {
  return (
    <li>
      {item}
      <button className="delete" onClick={() => onRemoveItem(item)}>
        Delete ToDo
      </button>
    </li>
  );
}

