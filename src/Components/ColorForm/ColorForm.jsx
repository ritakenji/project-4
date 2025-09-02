import "./ColorForm.css";
import { ColorInput } from "./ColorInput";

export default function ColorForm({ onAddColor }) {
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
      <input id="role" type="text" name="role" placeholder="secondary dark" />
      <label htmlFor="hex">
        Hex
        <ColorInput name="hex" />
      </label>

      <label htmlFor="contrastText">
        Contrast Text
        <ColorInput name="contrastText" />
      </label>

      <button type="submit">Add Color</button>
    </form>
  );
}
