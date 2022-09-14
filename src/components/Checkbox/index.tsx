import { FC, useState } from "react";
import classNames from "classnames";
import { ReactComponent as CheckMark } from "assets/icons/checkmark.svg";

import "./styles.scss";

const Checkbox: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const checkmarkClassName = classNames("Checkbox__checkmark", {
    Checkbox__checkmark_hidden: !checked,
  });

  return (
    <button
      className="Checkbox"
      onClick={() => setChecked(!checked)}
    >
      <div className={checkmarkClassName}>
        <CheckMark />
      </div>
    </button>
  );
};

export default Checkbox;
