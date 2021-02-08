import styled, { createGlobalStyle } from "styled-components";
import BackgroundImage from "./images/daniel-cheung.jpg";
import { INSTRUCTIONS } from "./staysTheSame/index";

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
    .instructions{
      background-color:whitesmoke;
      opacity: 75%;
      width: 90%;
    }
    .consoleClass{
      margin: 10px;
    }
    .play-area{
      display:flex;
      flex-direction:row;
      flex-wrap:wrap;
      width:300px;
    }
    .block{
      background-color:lightgrey;
      width:50px;
      height:50px;
      border:1px solid black;
    }
    .row{
      display:flex;
      flex-direction:row;
    }
    .robotZombie{
      background-image: url("https://svgur.com/i/Tqb.svg") !important;
      background-size:cover;
      z-index:2 !important;
    }
    .rotateZombieNorth{
      transform: rotate(0deg) !important;
    }
    .rotateZombieEast{
      transform: rotate(90deg) !important;
    }
    .rotateZombieSouth{
      transform: rotate(180deg) !important;
    } 
    .rotateZombieWest{
      transform: rotate(270deg) !important;
    }
    .goButton{
      margin-left:2px;
      width:6vw;
      border:1px solid black;
    }
    .inputBox{
      width:40vw;
    }
`;

export const InfoBox = styled.div`
  height: 100px;
  text-align: center;
  font-size: 5vw;
`;

export const CompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputBox = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
