import React from "react";
import { useRecoilState } from "recoil";
import {
  commandInput,
  modifiedCommandInput,
  onBoard,
  boardPosition,
  initError,
  robotFacingDirection,
  consoleReport,
} from "../store/Atom";

const Console: React.FC = () => {
  const [robotOnTheBoard, setRobotOnTheBoard] = useRecoilState(onBoard);
  const [initErrors, setInitErrors] = useRecoilState(initError);
  const [boardPositions, setBoardPositions] = useRecoilState(boardPosition);
  const [robotDirection, setRobotDirection] = useRecoilState(
    robotFacingDirection
  );
  const [reportRobotPosition, setReportRobotPosition] = useRecoilState(
    consoleReport
  );

  return (
    <div className="instructions">
      <div>
        <p className="consoleClass">{initErrors}</p>
        {robotOnTheBoard ? (
          <p className="consoleClass">Robot is on the board</p>
        ) : (
          <p className="consoleClass">Robot is not currently on the board</p>
        )}
        <p className="consoleClass"> x coordinate: {boardPositions.x}</p>
        <p className="consoleClass">y coordinate: {boardPositions.y}</p>
        <p className="consoleClass">
          The robot is currently facing: {robotDirection}
        </p>
        {reportRobotPosition ? (
          <p className="consoleClass">
            The robots current position is: {reportRobotPosition}
          </p>
        ) : (
          <p className="consoleClass"></p>
        )}
      </div>
    </div>
  );
};

export default Console;
