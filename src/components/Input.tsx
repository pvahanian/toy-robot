import React from "react";
import { useRecoilState } from "recoil";
//state
import { commandInput, invokeFunc } from "../store/Atom";
//utils
import { splitStringCommand } from "../utils/splitInputCommands";

const Input: React.FC = () => {
  const [command, setCommand] = useRecoilState(commandInput);
  const [invoke, setInvoke] = useRecoilState(invokeFunc);

  // React.MouseEvent<HTMLButtonElement> - I know I need to use this but can't make it work - How do I do it correctly?
  const onSubmit = (e: any) => {
    e.preventDefault();
    setInvoke(true);
    splitStringCommand(command);
    e.target.reset();
  };

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
    </div>
  );
};

export default Input;
