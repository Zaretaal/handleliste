import { useState } from "react";
import AddForm from "./components/AddForm";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Melk", amount: 2, bought: false },
    { id: 2, name: "Egg", amount: 1, bought: true },
  ]);

  function addItem(name, amount) {
    const newItem = {
      id: Date.now(),
      name,
      amount,
      bought: false,
    };

    setItems([newItem, ...items]);
  }

  function toggleBought(id) {
    setItems(
      items.map(item =>
        item.id === id
          ? { ...item, bought: !item.bought }
          : item
      )
    );
  }

  function updateAmount(id, newAmount) {
    if (newAmount < 1) return;

    setItems(
      items.map(item =>
        item.id === id
          ? { ...item, amount: newAmount }
          : item
      )
    );
  }

  return (
    <main>
      <h1>Handleliste</h1>

      <AddForm onAddItem={addItem} />

      <ShoppingList
        items={items}
        onToggleBought={toggleBought}
        onUpdateAmount={updateAmount}
      />
    </main>
  );
}

export default App;
