import { useEffect, useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";

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
