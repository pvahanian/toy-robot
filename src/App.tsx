import React from "react";
import { RecoilRoot } from "recoil";
//import components
import Input from "./components/Input";

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
    <RecoilRoot>
      <div className="App">
        <GlobalStyle />
        <CompleteWrapper>
          <InfoBox>Toy Robot Simulator</InfoBox>
          <Wrapper>
            <LeftWrapper>
              <Input />

              <Console />
            </LeftWrapper>
            <Board />
          </Wrapper>
        </CompleteWrapper>
      </div>
    </RecoilRoot>
  );
};

export default App;
