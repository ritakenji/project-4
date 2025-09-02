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
      <input
        id="role"
        type="text"
        name="role"
        placeholder="secondary dark"
        required
      />
      <label htmlFor="hex">
        Hex
        <ColorInput
          name="hex" /*  defaultColor="#5b70cf" <---- removed this because value needs to match color on edit too, how? idk */
        />
      </label>

      <label htmlFor="contrastText">
        Contrast Text
        <ColorInput
          name="contrastText" /* defaultColor="#ffffff"  <---- removed this because value needs to match color on edit too, how? idk */
        />
      </label>

      <button type="submit" className="add-color-button">
        Add Color
      </button>
    </form>
  );
}
