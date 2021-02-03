import React from "react";
//import components
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import Console from "./components/Console";
import Board from "./components/Board";
//import styles
import { GlobalStyle } from "./App.styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <div>Toy Robot Simulator</div>
        <Input />
        <Buttons />
        <Console />
        <Board />
      </div>
    </>
  );
};

export default App;
