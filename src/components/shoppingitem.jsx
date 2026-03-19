//denne oppgaven er gjort med hjelp og veiledning fra chatgpt, linken til samtalen er https://chatgpt.com/share/69aeb329-394c-8008-ab7a-7479fd2aa939//

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

