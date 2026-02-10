//denne oppgaven er gjort med hjelp og veiledning fra chatgpt, linken til samtalen er https://chatgpt.com/c/69889bc9-2a70-832f-8b53-cee6facf386c//
import ShoppingItem from "./ShoppingItem";

function ShoppingList({ items, onToggleBought, onUpdateAmount }) {
  return (
    <section>
      <h2>Handleliste</h2>

      <ul>
        {items.map(item => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggleBought={onToggleBought}
            onUpdateAmount={onUpdateAmount}
          />
        ))}
      </ul>
    </section>
  );
}

export default ShoppingList;





