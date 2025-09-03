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

  /* function handleUpdateColor(updatedColor, id, color) {
    setColors(colors.map((updatedColor)=>{
      return(
        UpdatedColor
      )
    });) */
    
    //new variable canotiajing what maps is gonna return
    //pass var to setcolors
    //pass id and color ( onUpdateColor(id, color))
   /*  setColors(colors.filter((color) => color.id !== updatedColorId)); *///change here map color by id thenn update
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
