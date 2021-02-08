//assign constants for robot app

export type Direction = "NORTH" | "SOUTH" | "WEST" | "EAST";

export interface CoordinateObject {
  x: number;
  y: number;
}

export type Coordinate = CoordinateObject | null;

export interface TableDimension extends CoordinateObject {}

export const TABLE_DIMENSION: TableDimension = {
  x: 5,
  y: 5,
};

export const FACING_DIRECTIONS: string[] = ["NORTH", "EAST", "SOUTH", "WEST"];

export const COMMANDS: string[] = ["PLACE", "MOVE", "LEFT", "RIGHT", "REPORT"];

export const ERRORS = {
  invalidInitialCommand: `Invalid PLACE command format. The valid PLACE command should be 'PLACE X,Y,F'.`,
  notInitialized: `The robot is not placed on the table yet. Place it first with 'PLACE X,Y,F'`,
  wrongDirection: `Invalid facing direction value. Available directions should be ${FACING_DIRECTIONS.join(
    " | "
  )}.`,
  wrongCoordinate: `Invalid command. Try changing your PLACE command to PLACE X,Y,F.`,
  wrongWay: "Can't move the Robot this way. It would fall off the table",
  nextCommand: `Enter another command to keep moving the robot!`,
};
