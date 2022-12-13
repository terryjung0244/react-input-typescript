import React from "react";
import { InputComponentPropsType } from "./Input.interface";
import "./../input/Input.css";

const Input = ({
  name,
  value,
  onChangeFunc,
  placeholder,
}: InputComponentPropsType) => {
  return (
    <div>
      <input
        className="input-container"
        name={name}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChangeFunc({ name: e.target.name, value: e.target.value })
        }
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
