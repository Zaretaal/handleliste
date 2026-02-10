//denne oppgaven er gjort med hjelp og veiledning fra chatgpt, linken til samtalen er https://chatgpt.com/c/69889bc9-2a70-832f-8b53-cee6facf386c//

function ShoppingItem({ item, onToggleBought, onUpdateAmount }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.bought}
          onChange={() => onToggleBought(item.id)}
        />
        {item.name}
      </label>

      <input
        type="number"
        min="1"
        value={item.amount}
        onChange={e =>
          onUpdateAmount(item.id, Number(e.target.value))
        }
      />
    </li>
  );
}

export default ShoppingItem;

