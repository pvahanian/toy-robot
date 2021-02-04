import { atom } from "recoil";

//state

//"Tell the robot what to do" state
type Default = string;

const initState: Default = "";

export const commandInput = atom({
  key: "commandInput",
  default: initState,
});

//Invoke checking function state
type Invoke = boolean;

const invokeInitState: Invoke = false;

export const invokeFunc = atom({
  key: "invokeFunc",
  default: invokeInitState,
});
