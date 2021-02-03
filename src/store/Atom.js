import { atom } from "recoil";

//state

//"Tell the robot what to do" state
export const commandInput = atom({
  key: "commandInput",
  default: "",
});
