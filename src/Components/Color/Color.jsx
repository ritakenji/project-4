import "./Color.css";

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

export default function Color({ color, id, onDeleteColor }) {
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
      <p className="delete-message">Really delete?</p>
      {/* <button type="button" className="cancel-button" onClick={() =>}></button> */}
      <button type="button" onClick={() => onDeleteColor(id)}>
        Delete
      </button>
    </div>
  );
}

/* 
What must happen: 
I click the delete button ---> 1 <p> w message + cancel button pop up  AND  delete button moved to to right 

How I get there:
- 1st button onclick triggers onConfirmDelete
- onConfirmDelete --> show 2 elements: 
                              - message ---> <p className="delete-message">Really delete?</p>
                              - cancel shows ---> <button type="button" className="cancel-button" onClick={() =>}></button>
                              - delete button (use same one as initial))
*/
