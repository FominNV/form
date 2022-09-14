import {
  FC, useState, useMemo, ReactNode,
} from "react";
import drop from "assets/images/select-drop.png";
import classNames from "classnames";
import { randomKey } from "common";
import  { ISelectProps } from "./types";

import "./styles.scss";

const Select: FC<ISelectProps> = ({ name, data, setCurrentCategory }) => {
  const [showData, setShowData] = useState<boolean>(false);

  const dataListButtons = useMemo<ReactNode>(
    () => data.map((elem) => (
      <div
        key={`select_li_${randomKey()}`}
        data-category={elem}
        className="Select__data-list_item"
        onMouseDown={setCurrentCategory}
      >
        {elem}
      </div>
    )),
    [data, setCurrentCategory],
  );

  const dropClassName = classNames("Select__drop", {
    Select__drop_reverse: showData,
  });

  const dataListClassName = classNames("Select__data-list", {
    "Select__data-list_hidden": !showData,
  });

  return (
    <button
      className="Select"
      onMouseDown={() => setShowData(!showData)}
    >
      <p className="Select__name">{name}</p>

      <img
        src={drop}
        alt="drop"
        className={dropClassName}
      />

      <ul className={dataListClassName}>
        <p className="Select__data-list_title">{name}</p>
        {dataListButtons}
      </ul>
    </button>
  );
};

export default Select;
