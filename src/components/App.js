import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [mode, setMode] = useState(false);
  
  const appClass = mode ? "App dark" : "App light";

  function handleClickMode() {
    setMode((mode) => !mode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClickMode}>
          {mode ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;









// import React, {useState} from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {
//   const [items, setItems] = useState(itemData)
//   const [isDarkMode, setIsDarkMode] = useState(false)

//   function handleDarkModeClick() {
//     setIsDarkMode((isDarkMode) => !isDarkMode)
//   }
//   const appClass = isDarkMode ? "App dark" : "App light"

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={handleDarkModeClick}>
//           {isDarkMode ? "Dark" : "Light"}Mode
//         </button>
//       </header>
//       <ShoppingList items={items} />
//     </div>
//   );
// }

// export default App;
