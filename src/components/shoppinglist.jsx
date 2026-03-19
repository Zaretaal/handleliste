//denne oppgaven er gjort med hjelp og veiledning fra chatgpt, linken til samtalen er https://chatgpt.com/share/69aeb329-394c-8008-ab7a-7479fd2aa939//
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





