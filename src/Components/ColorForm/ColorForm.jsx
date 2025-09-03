import "./ColorForm.css";
import { ColorInput } from "./ColorInput";

export default function ColorForm({
  onAddColor,
  defaultValue = {
    hex: "#5b70cf",
    role: "",
    contrastText: "#ffffff",
  },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("Here's data: ", data);
    onAddColor(data);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input
        id="role"
        type="text"
        name="role"
        placeholder="secondary dark"
        defaultValue={defaultValue.role}
        required
      />
      <label htmlFor="hex">
        Hex
        <ColorInput name="hex" defaultColor={defaultValue.hex} />
      </label>

      <label htmlFor="contrastText">
        Contrast Text
        <ColorInput
          name="contrastText"
          defaultColor={defaultValue.contrastText}
        />
      </label>

      <button type="submit" className="add-color-button">
        Add Color
      </button>
    </form>
  );
}
