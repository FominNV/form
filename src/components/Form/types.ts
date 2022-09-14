import { IInputProps } from "components/Input/types";

export enum CategoryMode {
  COURSES = "Курсы",
  PROJECTS = "Проекты",
  JOB = "Работа",
  ESTATE = "Недвижимость",
}

export interface IImage {
  id: string
  name: string
  path: string
}

export interface IInput extends IInputProps {
  key: string
}
