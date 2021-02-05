//string from input - split into array

export let splitStringCommand: Function;

splitStringCommand = function (inputCommand: string): string[] {
  let commands = inputCommand.split(",");
  console.log(commands);
  return commands;
};
