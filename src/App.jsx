import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }

  function handleDeleteColor(deletedId) {
    setColors(colors.filter((color) => color.id !== deletedId));
    console.log("deleteId is: ", deletedId);
  }

  function handleUpdateColor(updatedColor, id, color) {
    setColors(
      colors.map((color) => {
        if (color.id === id) {
          return updatedColor;
        } else {
          return color;
        }
      })
    );

    //ToDo:
    //new variable containing what maps is gonna return
    //pass var to setcolors
    //pass id and color ( onUpdateColor(id, color))???
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
            onUpdateColor={handleUpdateColor}
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
