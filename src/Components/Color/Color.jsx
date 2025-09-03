import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";

export default function Color({ color, id, onDeleteColor, onUpdateColor }) {
  const [mode, setMode] = useState("view");

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

      {mode === "edit" && (
        <>
          <ColorForm
            defaultValue={color}
            buttonName={"Update Color"}
            onAddColor={(data) => {
              onUpdateColor(data, id);
              setMode("view");
            }}
          />
          <button type="button" onClick={() => setMode("view")}>
            Cancel
          </button>
        </>
      )}

      {mode === "delete" && (
        <>
          <p className="color-card-highlight">Really delete?</p>
          <button type="button" onClick={() => setMode("view")}>
            Cancel
          </button>
          <button type="button" onClick={() => onDeleteColor(id)}>
            Delete
          </button>
        </>
      )}

      {mode === "view" && (
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
