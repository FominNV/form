import { FC } from "react";
import  { ITextareaProps } from "./types";

import "./styles.scss";

const Textarea: FC<ITextareaProps> = () => <textarea className="Textarea" />;

export default Textarea;
