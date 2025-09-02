import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";
export default function Color({ color, id, onDeleteColor, onUpdateColor }) {
  const [mode, setMode] = useState("view");

  const handleUpdate = (updatedColor) => {
    onUpdateColor(id, updatedColor);
    setMode("view");
  };

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
                <ColorForm onSubmit={handleUpdate} initialData={color} />
                <button
                  type="button"
                  onClick={() => (onUpdateColor(id), setMode("view"))}
                >
                  Cancel
                </button>
              </>
            );
          // thought i needed the break but the return does the same job here
          case "delete":
            return (
              <>
                <p className="color-card-highlight">Really delete?</p>
                <button type="button" onClick={() => setMode("view")}>
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
