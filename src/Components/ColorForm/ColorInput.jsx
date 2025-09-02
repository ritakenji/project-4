import "./ColorForm.css";

export function ColorInput() {
  return (
    <div className="color-inputs">
      <input type="text" name="color" placeholder="#0000" />
      <input type="color" name="hexa" placeholder="" />
    </div>
  );
}
