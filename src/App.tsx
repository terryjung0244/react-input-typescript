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
    inputName: "",
    inputAge: "",
  });
  const onChangeFunc = (data: OnChangeFuncDataType) => {
    console.log(data.name);
    console.log(data.value);
    setInput({
      ...input,
      [data.name]: data.value,
      // Reusable Structure
    });
  };

  return (
    <div>
      <div className="input-main-container">
        <Input
          name={"inputName"}
          value={input["inputName"]}
          onChangeFunc={onChangeFunc}
          placeholder={"Tell me your name"}
        />
        <Input
          name={"inputAge"}
          value={input["inputAge"]}
          onChangeFunc={onChangeFunc}
          placeholder={"Tell me your age"}
        />
      </div>
    </div>
  );
};

export default App;
