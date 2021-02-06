import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
//state
import {
  commandInput,
  modifiedCommandInput,
  onBoard,
  boardPosition,
  initError,
  robotFacingDirection,
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
  const [robotOnTheBoard, setRobotOnTheBoard] = useRecoilState(onBoard);
  const [initErrors, setInitErrors] = useRecoilState(initError);
  const [boardPositions, setBoardPositions] = useRecoilState(boardPosition);
  const [robotDirection, setRobotDirection] = useRecoilState(
    robotFacingDirection
  );

  //useEffect to set state for and to control Robot logic:
  useEffect(() => {
    let initInput: string = modifiedCommand[0];
    let xAxisValue: number = modifiedCommand[1];
    let yAxisValue: number = modifiedCommand[2];
    let directionFacing: string = modifiedCommand[3];

    //Switch statement that checks commands - logic to control errors and robots within each case:
    if (initInput === "PLACE") {
      setRobotOnTheBoard(true);
    }
    if (robotOnTheBoard) {
      switch (initInput) {
        case "PLACE":
          if (xAxisValue <= 4 && yAxisValue <= 4) {
            setBoardPositions({
              x: xAxisValue,
              y: yAxisValue,
            });
            setInitErrors(STAYSTHESAME.ERRORS.nextCommand);
            if (STAYSTHESAME.FACING_DIRECTIONS.includes(directionFacing)) {
              setRobotDirection(directionFacing);
              setInitErrors(STAYSTHESAME.ERRORS.nextCommand);
            } else {
              setInitErrors(STAYSTHESAME.ERRORS.wrongDirection);
            }
          } else {
            setInitErrors(STAYSTHESAME.ERRORS.wrongCoordinate);
          }
          break;
        case "LEFT":
          setInitErrors("LEFT");
          break;
        case "RIGHT":
          setInitErrors("RIGHT");
          break;
        case "MOVE":
          setInitErrors("MOVE");
          break;
        case "REPORT":
          setInitErrors("REPORT");
          break;
        default:
          setInitErrors(
            "Enter PLACE,X,Y,F to start. This will put the robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST, "
          );
      }
    } else {
      setInitErrors(
        "Enter PLACE X,Y,F - will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST."
      );
    }
  }, [
    modifiedCommand,
    setInitErrors,
    robotOnTheBoard,
    setRobotOnTheBoard,
    setBoardPositions,
    setRobotDirection,
  ]);

  // React.MouseEvent<HTMLButtonElement> - I know I need to use this but can't make it work - How do I do it correctly?
  //Handles the onClick mouse event - Splits input command string into an array of strings. Sets that new array to 'modified command' state
  const onSubmit = (e: any) => {
    e.preventDefault();
    let splitStringCommand = (input: string) => {
      let initialString: any = input.split(",");
      let arrayOfStrings: any = initialString.map((s: string) => s.trim());
      setModifiedCommand(arrayOfStrings);
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
      <p>{robotOnTheBoard}</p>
      <p>{boardPositions.x}</p>
      <p>{boardPositions.y}</p>
      <p>{robotDirection}</p>
    </div>
  );
};

export default Input;
