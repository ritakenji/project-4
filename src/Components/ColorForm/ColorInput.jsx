import "./ColorForm.css";
import { useState } from "react";

export function ColorInput({ name, defaultColor }) {
  const [inputValue, setInputValue] = useState(defaultColor);

  function handleChange(event) {
    //an event where something changes
    setInputValue(event.target.value); //what changes
  }
  return (
    <div className="color-inputs">
      <input
        type="text"
        id={name}
        name={name}
        defaultValue={inputValue}
        placeholder={defaultColor}
      />
      <input
        type="color"
        name={name}
        onChange={handleChange}
        defaultValue={defaultColor}
      />
      {/* where the change happens ^^^ */}
    </div>
  );
}
