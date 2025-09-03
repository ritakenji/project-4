import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

/* 
********** Acceptance Criteria
- The theme is saved to localStorage upon any addition, deletion, or edit of a color.
- Upon reloading the application, the theme is retrieved and displayed from localStorage.

********* Tasks
- Install use-local-storage-state package from npm npm i use-local-storage-state and use it */

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }

  function handleDeleteColor(deletedId) {
    setColors(colors.filter((color) => color.id !== deletedId));
  }

  function handleUpdateColor(updatedColor, id) {
    const newArr = colors.map((color) =>
      color.id === id ? { id, ...updatedColor } : color
    );

    setColors(newArr);
  }

  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm
        onAddColor={handleAddColor}
        onUpdateColor={handleUpdateColor}
        buttonName={"Add Color"}
      />

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
