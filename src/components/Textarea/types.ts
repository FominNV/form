import { ChangeEvent } from "react";

export interface ITextareaProps {
  value: string
  onChange: EventFunc<ChangeEvent<HTMLTextAreaElement>>
}
