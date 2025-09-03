import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";

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
- Each color card has an "Edit" button. ✅ 
- Clicking the "Edit" button allows me to modify the role, hex value, and contrast text via a form.
- The updated color information is reflected in the theme upon submission.

****** Tasks
- Introduce a state for the edit ✅ 
- Reuse the ColorForm Component and display it within the Color Component when in edit mode ✅  */

export default function Color({ color, id, onDeleteColor, onUpdateColor }) {
  const [mode, setMode] = useState("default"); //default aka view/show

  /*  const handleUpdate = (updatedColor) => {
    onUpdateColor(updatedColor); //in theory i understand im almost there, in practice i feel so far away
  }; */

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

      {(() => {
        switch (mode) {
          case "edit":
            return (
              <>
                <ColorForm
                  defaultValue={color}
                  onSubmit={() => onUpdateColor(id, color)}
                />
                <button type="button" onClick={() => setMode("default")}>
                  Cancel
                </button>
              </>
            );
          // thought i needed the break but the return does the same job here
          case "delete":
            return (
              <>
                <p className="color-card-highlight">Really delete?</p>
                <button type="button" onClick={() => setMode("default")}>
                  Cancel
                </button>
                <button type="button" onClick={() => onDeleteColor(id)}>
                  Delete
                </button>
              </>
            );
          default:
            return (
              <>
                <button type="button" onClick={() => setMode("delete")}>
                  Delete
                </button>
                <button type="button" onClick={() => setMode("edit")}>
                  Edit
                </button>
              </>
            );
        }
      })()}
    </div>
  );
}
