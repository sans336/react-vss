import { useEffect } from "react";

const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

function ItemList() {
  useEffect(() => {
    // This code will run when the component mounts
    console.log("Component mounted!");
  }, []); // The empty array means this effect only runs once, on mount

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;