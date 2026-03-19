//denne oppgaven er gjort med hjelp og veiledning fra chatgpt, linken til samtalen er https://chatgpt.com/share/69aeb329-394c-8008-ab7a-7479fd2aa939//

import { useState } from "react";

function AddForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !amount) {
      setError("Du må fylle ut både vare og antall.");
      return;
    }

    onAddItem(name, Number(amount));
    setName("");
    setAmount("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Legg til vare</legend>

        <label>
          Vare
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label>
          Antall
          <input
            type="number"
            min="1"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </label>

        <button type="submit">Legg til vare</button>

        {error && <p>{error}</p>}
      </fieldset>
    </form>
  );
}

export default AddForm;
