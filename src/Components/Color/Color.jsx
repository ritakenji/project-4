import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";
export default function Color({ color, id, onDeleteColor }) {
  const [isShown, setIsShown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleDeleteConfirm() {
    setIsShown(true);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-highlight">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {isEditing && <ColorForm />}

      {!isShown && (
        <>
          <button type="button" onClick={handleDeleteConfirm}>
            Delete
          </button>

          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}

      {isShown && (
        <>
          <p className="color-card-highlight">Really delete?</p>
          <button type="button" onClick={() => setIsShown(false)}>
            Cancel
          </button>
          <button type="button" onClick={() => onDeleteColor(id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

/* 
What happens:
- click on edit button:
                    > other buttons disappear
                    > new form shows up role, hex, contrast color inputs + 'update color' button
- click on update button:
                    > info is saved and reflected in the theme
*/

/* 
****** Acceptance Criteria
- Each color card has an "Edit" button.
- Clicking the "Edit" button allows me to modify the role, hex value, and contrast text via a form.
- The updated color information is reflected in the theme upon submission.

****** Tasks
- Introduce a state for the edit
- Reuse the ColorForm Component and display it within the Color Component when in edit mode */
