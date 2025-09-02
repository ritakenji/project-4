import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);
  console.log("my colors: ", colors.length);

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }

  function handleDeleteColor(deleteId) {
    /* console.log("Deleted Id here: ", deleteId); */
    setColors(colors.filter((color) => color.id != deleteId));
  }

  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm onAddColor={handleAddColor} />

      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            id={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
          />
        );
      })}
      {colors.length === 0 ? (
        <p className="add-color-message">
          No more themes available. Please add more !
        </p>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
