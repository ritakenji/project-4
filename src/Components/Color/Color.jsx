import "./Color.css";

//Set up a React component for displaying a single color card:
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
      <button type="button" onClick={() => onDeleteColor(id)}>
        Delete
      </button>
    </div>
  );
}
