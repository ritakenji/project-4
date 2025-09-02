import { useState } from "react";
import "./Color.css";
export default function Color({ color, id, onDeleteColor }) {
  const [isShown, setIsShown] = useState(false);

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
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {!isShown && (
        <button type="button" onClick={handleDeleteConfirm}>
          Delete
        </button>
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
What must happen: 
I click the delete button ---> 1 <p> w message + cancel button pop up  AND  delete button moved to to right 

How I get there:
- 1st button onclick triggers onConfirmDelete
- onConfirmDelete --> show 3 elements: 
                              - message ---> <p className="delete-message">Really delete?</p>
                              - cancel button ---> <button type="button" className="cancel-button" onClick={() =>}>Cancel</button>
                              - delete button ---> <button type="button" onClick={() => onDeleteColor(id)}>
-
*/
