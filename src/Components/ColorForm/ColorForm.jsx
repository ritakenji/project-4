/*
*****Acceptance Criteria
- Each color card displayed in the theme includes a "Delete" button for easy removal.
- Clicking the "Delete" button should show a confirmation message before actually deleting
- If there are no colors left in the theme after deletion, display a message encouraging users to add new colors.

****Tasks
  Implement a function to handle the deletion of a color.
- Introduce a state to handle the confirmation message
- Reuse the .color-card-headline css rule for the confirm question, but maybe rename it to .color-card-hightlight
*/

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
      <input type="text" name="role" placeholder="secondary dark" />
      <label htmlFor="hex">
        Hex
        <ColorInput name="hex" />
      </label>

      <label htmlFor="contrastText">
        Contrast Text
        <ColorInput name="contrastText" />
      </label>

      <button type="submit" className="form-button">
        Add Color
      </button>
    </form>
  );
}
