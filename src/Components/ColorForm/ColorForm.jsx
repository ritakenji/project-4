/*
***Acceptance Criteria***
- Users can input a role, hex value, and contrast text via a form to add a new color to the theme.✅
- The form should be prefilled with default values to guide user input.✅
- Upon submission, the new color is added to the top of the colors and is displayed on a color card to confirm addition.✅
- The inputs for hex and contrastText should include both color and text input types for easy and accurate color selection.✅

***Tasks***
- Implement a ColorForm component that allows users to submit new colors to the theme.✅
- Use a package to generate unique id's like nanoid or ui✅
- Develop a ColorInput component to handle synchronized text and color inputs, ensuring that they reflect the same value. ( Controlled Inputs )✅
^^^ need a component, render it 2x in Form✅
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
