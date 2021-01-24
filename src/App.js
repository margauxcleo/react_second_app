import React from "react";
import './App.css';

import HelloWorld from "./components/HelloWorld/HelloWorld";
import Title from "./components/Title/Title";
import ButtonCustom from "./components/ButtonCustom/ButtonCustom";

const App = () => {
  const couleur = "red";

  const handleOnClick = (event) => {
    event.preventDefault();
    alert("bonjour");
  };

  const afficheCouleur = () => {
    console.log(`La couleur de app est ${couleur}`);
  };

  return (
  <div>
    <Title />
    <HelloWorld name="John Wick" age="20"/>
    <ButtonCustom 
      handleOnClick={handleOnClick}  
      couleurParent={afficheCouleur}
    />
  </div>
  ) 
}


export default App;
