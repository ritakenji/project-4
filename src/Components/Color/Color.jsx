import { useEffect, useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";

/* 
**** Acceptance Criteria
- A "Copy to Clipboard" button is available. ✅ 
- Clicking the button copies the hex code to the clipboard.
- A confirmation message appears indicating that the color has been copied successfully.
- Confirmation message disappears after 3 seconds

**** Tasks
- Create a CopyToClipboard component ✅ 
- Use navigator.clipboard.writeText() API to copy the hex code to the clipboard ( Note that it is async )✅
- Introduce a state that handles the confirmation message
- Utilize useEffect to set a 3 second timeout to reset the state
 */

export default function Color({ color, id, onDeleteColor, onUpdateColor }) {
  const [mode, setMode] = useState("default");
  const [isCopied, setIsCopied] = useState(false);

  async function handleClipboard(text) {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
  }

  useEffect(() => {
    if (isCopied === true) {
      let timeoutID = setTimeout(() => {
        setIsCopied(false);
      }, 3000);

      return () => clearTimeout(timeoutID);
    }
  }, [isCopied]);

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-highlight" id="hex">
        {color.hex}
      </h3>
      {mode === "default" && (
        <>
          <button
            type="button"
            data-copy="#hex"
            onClick={() => {
              handleClipboard(color.hex);
            }}
          >
            {isCopied === false ? "Copy" : "Successfully copied!"}
          </button>
        </>
      )}

      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {mode === "edit" && (
        <>
          <ColorForm
            defaultValue={color}
            buttonName={"Update Color"}
            onAddColor={(data) => {
              onUpdateColor(data, id);
              setMode("default");
            }}
          />
          <button type="button" onClick={() => setMode("default")}>
            Cancel
          </button>
        </>
      )}

      {mode === "delete" && (
        <>
          <p className="color-card-highlight">Really delete?</p>
          <button type="button" onClick={() => setMode("default")}>
            Cancel
          </button>
          <button type="button" onClick={() => onDeleteColor(id)}>
            Delete
          </button>
        </>
      )}

      {mode === "default" && (
        <>
          <button type="button" onClick={() => setMode("delete")}>
            Delete
          </button>
          <button type="button" onClick={() => setMode("edit")}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}
