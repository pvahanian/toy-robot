import React from "react";
//import components
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import Console from "./components/Console";
import Board from "./components/Board";
//import styles
import {
  GlobalStyle,
  CompleteWrapper,
  InfoBox,
  Wrapper,
  LeftWrapper,
} from "./App.styles";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <CompleteWrapper>
        <InfoBox>Toy Robot Simulator</InfoBox>
        <Wrapper>
          <LeftWrapper>
            <Input />
            <Buttons />
            <Console />
          </LeftWrapper>
          <Board />
        </Wrapper>
      </CompleteWrapper>
    </div>
  );
};

export default App;
