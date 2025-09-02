import "./ColorForm.css";
import { useState } from "react";

export function ColorInput({ inputValue, name }) {
  const [inputValue, setInputValue] = useState("#00000");

  return (
    <div className="color-inputs">
      <input type="text" name={name} placeholder="#0000" value={inputValue} />
      <input type="color" name={name} placeholder="" value={inputValue} />
    </div>
  );
}
