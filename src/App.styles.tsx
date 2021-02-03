import styled, { createGlobalStyle } from "styled-components";
import BackgroundImage from "./images/daniel-cheung.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        width: 100%;
    }
    body {
        background-image: url(${BackgroundImage});
        background-size: cover;
        width: 80%;
        margin: 12% auto;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;

export const InfoBox = styled.div`
  border: 1px solid brown;
  height: 100px;
`;

export const CompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  border: 1px solid orange;
  display: flex;
  justify-content: space-between;
`;

export const LeftWrapper = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputBox = styled.div`
  border: 1px solid red;
`;

export const ButtonWrapper = styled.div`
  border: 1px solid yellow;
  display: flex;
  justify-content: space-around;
`;
