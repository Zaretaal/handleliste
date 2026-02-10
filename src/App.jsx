// Dette prosjektet er utviklet med hjelp og veiledning fra ChatGPT. Pga at jeg måtte kjøpe ny pc, så trengte jeg i tillegg til veiledningen be om hjelp om hvordan man reinstallerer alle programmene. linken er https://chatgpt.com/c/69889bc9-2a70-832f-8b53-cee6facf386c//
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
