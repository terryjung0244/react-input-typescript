import React, { useState } from "react";
import Input from "./components/input/Input";
import "./App.css";
import {
  InputStateType,
  OnChangeFuncDataType,
} from "./components/input/Input.interface";

const App = () => {
  const [input, setInput] = useState<InputStateType>({
    //Set type of useState
    input: "",
  });
  const onChangeFunc = (data: OnChangeFuncDataType) => {
    console.log(data);
    setInput({
      ...input,
      [data.name]: data.value,
      // Reusable Structure
    });
  };

  return (
    <div>
      <Input
        name={"input"}
        value={input["input"]}
        onChangeFunc={onChangeFunc}
        placeholder={"How much do you have in your account?"}
      />
    </div>
  );
};

export default App;
