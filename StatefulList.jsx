import React, { useState } from "react";

function StatefulList() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = prompt("اضافة عنصر جديد ");
    if (newItem) {
      setItems([...items, newItem]);
    }
  };

  const deleteItems = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <h2>قائمة العناصر : </h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItems(index)}>حذف</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>اضافة عنصر جديد</button>
    </div>
  );
}

export default StatefulList;
