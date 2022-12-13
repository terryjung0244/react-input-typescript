export interface InputStateType {
  inputName: string;
  inputAge: string;
}

export interface InputComponentPropsType {
  name: string;
  value: string;
  onChangeFunc: ({ name, value }: OnChangeFuncDataType) => void;
  placeholder: string;
}

export interface OnChangeFuncDataType {
  name: string;
  value: string;
}
