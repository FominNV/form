import {
  FC, useCallback, ChangeEvent,
} from "react";
import { IInputProps } from "./types";

import "./styles.scss";

const Input: FC<IInputProps> = ({ value, placeholder, setState }) => {
  const onChangeHandler = useCallback<EventFunc<ChangeEvent<HTMLInputElement>>>(
    (e) => {
      setState(e.currentTarget.value);
    },
    [setState],
  );

  return (
    <input
      type="text"
      className="Input"
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default Input;
