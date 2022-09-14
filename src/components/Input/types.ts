import { Dispatch, SetStateAction } from "react";

export interface IInputProps {
  value: string
  placeholder: string
  setState: Dispatch<SetStateAction<string>>
}
