import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
//state
import {
  commandInput,
  modifiedCommandInput,
  boardPosition,
  initError,
} from "../store/Atom";
//import constants from staysTheSame
import * as STAYSTHESAME from "../staysTheSame/index";
import Console from "./Console";

//Component
const Input: React.FC = () => {
  //Set recoil state
  const [command, setCommand] = useRecoilState(commandInput);
  const [modifiedCommand, setModifiedCommand] = useRecoilState(
    modifiedCommandInput
  );
  const [initErrors, setInitErrors] = useRecoilState(initError);

  //Robot control logic:
  useEffect(() => {
    let initInput: string = modifiedCommand[0];
    //build switch statement that does:
    switch (initInput) {
      case "PLACE":
        setInitErrors("PLACE");
        break;
      case "MOVE":
        setInitErrors("MOVE");
        break;
      case "LEFT":
        setInitErrors("LEFT");
        break;
      case "RIGHT":
        setInitErrors("RIGHT");
        break;
      case "REPORT":
        setInitErrors("REPORT");
        break;
      default:
        setInitErrors(
          "Invalid PLACE command. Your PLACE command should be 'PLACE X,Y,F'"
        );
    }
  }, [modifiedCommand, setInitErrors]);

  // React.MouseEvent<HTMLButtonElement> - I know I need to use this but can't make it work - How do I do it correctly?
  //Handles the onClick mouse event - Splits input command string into an array of strings. Sets that new array to 'modified command' state
  const onSubmit = (e: any) => {
    e.preventDefault();
    let splitStringCommand = (input: string) => {
      let a: any = input.split(",");
      setModifiedCommand(a);
    };
    splitStringCommand(command);
    e.target.reset();
  };

  //Handles user input commands and sets them to 'command' state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value.toUpperCase());
  };

  return (
    <div>
      <div>Tell the robot what to do...</div>
      <form onSubmit={onSubmit}>
        <input
          onChange={handleChange}
          name="robotCommands"
          type="text"
          placeholder="Take the robot for a spin!"
        />
        <button>Go</button>
      </form>
      <p>{initErrors}</p>
    </div>
  );
};

export default Input;
