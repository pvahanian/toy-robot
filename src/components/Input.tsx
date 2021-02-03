import React, { useState } from "react";
//state
import { commandInput } from "../store/Atom.js";

const Input: React.FC = () => {
  const [command, setCommand] = useState({ robotCommands: "" });

  const onSubmit = (e: any) => {
    e.preventDefault();
    // e.target.reset();
  };
  // React.FormEvent<HTMLButtonElement>
  const handleChange = (e: any) => {
    setCommand({ ...command, [e.target.name]: e.target.value });
  };

  console.log(command);

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
