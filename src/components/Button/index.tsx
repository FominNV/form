import { FC } from "react";
import  { IButtonProps } from "./types";

import "./styles.scss";

const Button: FC<IButtonProps> = ({ name }) => <button className="Button">{name}</button>;

export default Button;
