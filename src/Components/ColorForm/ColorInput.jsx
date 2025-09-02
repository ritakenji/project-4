import "./ColorForm.css";
import { useState } from "react";

export function ColorInput({ name }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    //an event where something changes
    setInputValue(event.target.value); //what changes
  }
  return (
    <div className="color-inputs">
      <input type="text" name={name} placeholder="#0000" value={inputValue} />
      <input type="color" name={name} placeholder="" onChange={handleChange} />
      {/* where the change happens ^^^ */}
    </div>
  );
}
