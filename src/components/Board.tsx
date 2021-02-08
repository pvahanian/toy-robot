import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  boardPosition,
  idValue,
  onBoard,
  robotFacingDirection,
} from "../store/Atom";
import * as STAYSTHESAME from "../staysTheSame/index";

const Board = () => {
  const [boardPositions, setBoardPositions] = useRecoilState(boardPosition);
  const [robotOnTheBoard, setRobotOnTheBoard] = useRecoilState(onBoard);
  const [robotDirection, setRobotDirection] = useRecoilState(
    robotFacingDirection
  );
  const [id, setId] = useRecoilState(idValue);
  // const [direction, setDirection] = useState()
  let [oldId, setOldId] = useState("null");

  // STAYSTHESAME.INITIAL_ROTATE_DEG

  useEffect(() => {
    setId(boardPositions.x.toString() + boardPositions.y.toString());
    switch (robotDirection) {
      case "NORTH":
        let robotDivNorth: any = document.getElementById(id);
        robotDivNorth.classList.remove("rotateZombieEast");
        robotDivNorth.classList.remove("rotateZombieWest");
        robotDivNorth.classList.add("rotateZombieNorth");
        break;
      case "EAST":
        let robotDivEast: any = document.getElementById(id);
        robotDivEast.classList.remove("rotateZombieSouth");
        robotDivEast.classList.remove("rotateZombieNorth");
        robotDivEast.classList.add("rotateZombieEast");
        break;
      case "SOUTH":
        let robotDivSouth: any = document.getElementById(id);
        robotDivSouth.classList.remove("rotateZombieEast");
        robotDivSouth.classList.remove("rotateZombieWest");
        robotDivSouth.classList.add("rotateZombieSouth");
        break;
      case "WEST":
        let robotDivWest: any = document.getElementById(id);
        robotDivWest.classList.remove("rotateZombieSouth");
        robotDivWest.classList.remove("rotateZombieNorth");
        robotDivWest.classList.add("rotateZombieWest");
        break;
    }

    //@ts-ignore

    if (id !== null && robotOnTheBoard) {
      if (oldId !== "null") {
        let deleter: any = document.getElementById(oldId);
        deleter.classList.remove("robotZombie");
      }
      // getElementById(elementId: string): HTMLElement | null;
      let robotDiv: any = document.getElementById(id);

      robotDiv.classList.add("robotZombie");
      // highlighter.classList.add("on");

      setOldId(id);
    }
  }, [boardPositions, id, robotDirection]);

  return (
    <div className="container">
      <div className="play-area">
        <div className="row">
          <div id="04" className="block"></div>
          <div id="14" className="block"></div>
          <div id="24" className="block"></div>
          <div id="34" className="block"></div>
          <div id="44" className="block"></div>
        </div>
        <div className="row">
          <div id="03" className="block"></div>
          <div id="13" className="block"></div>
          <div id="23" className="block"></div>
          <div id="33" className="block"></div>
          <div id="43" className="block"></div>
        </div>

        <div className="row">
          <div id="02" className="block"></div>
          <div id="12" className="block"></div>
          <div id="22" className="block"></div>
          <div id="32" className="block"></div>
          <div id="42" className="block"></div>
        </div>
        <div className="row">
          <div id="01" className="block"></div>
          <div id="11" className="block"></div>
          <div id="21" className="block"></div>
          <div id="31" className="block"></div>
          <div id="41" className="block"></div>
        </div>
        <div className="row">
          <div id="00" className="block"></div>
          <div id="10" className="block"></div>
          <div id="20" className="block"></div>
          <div id="30" className="block"></div>
          <div id="40" className="block"></div>
        </div>
        {/* <div id="" className="block"></div> */}
      </div>
    </div>
  );
};

export default Board;
