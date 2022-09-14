import { MouseEvent } from "react";

export interface ISelectProps {
  name: string
  data: string[]
  setCurrentCategory: EventFunc<MouseEvent<HTMLDivElement>>
}
