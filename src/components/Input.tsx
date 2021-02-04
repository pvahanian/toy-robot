import React from "react";
import { useRecoilState } from "recoil";
//state
import { commandInput, invokeFunc } from "../store/Atom";

const Input: React.FC = () => {
  // const [command, setCommand] = useState({ robotCommands: "" });
  const [command, setCommand] = useRecoilState(commandInput);
  const [invoke, setInvoke] = useRecoilState(invokeFunc);

  // React.MouseEvent<HTMLButtonElement>
  const onSubmit = (e: any) => {
    e.preventDefault();
    setInvoke(true);
    e.target.reset();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  console.log(invoke);
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
