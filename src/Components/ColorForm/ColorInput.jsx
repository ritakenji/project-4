import "./ColorForm.css";
import { useState } from "react";

export function ColorInput({ name, defaultColor }) {
  const [inputValue, setInputValue] = useState(defaultColor);

  function handleChange(event) {
    //an event where something changes
    console.log("event.target.value: ", event.target.value);
    setInputValue(event.target.value); //what changes
  }
  return (
    <div className="color-inputs">
      <input type="text" id={name} name={name} value={inputValue} />
      <input
        type="color"
        /* name={name} */
        onChange={handleChange}
        value={inputValue}
      />
      {/* where the change happens ^^^ */}
    </div>
  );
}
