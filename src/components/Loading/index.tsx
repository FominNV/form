import { FC } from "react";
import loading from "assets/images/loading.png";
import classNames from "classnames";
import  { ILoadingProps } from "./types";

import "./styles.scss";

const Loading: FC< ILoadingProps> = ({ show }) => {
  const loadingClassName = classNames("Loading", {
    Loading_hidden: !show,
  });

  return (
    <div className={loadingClassName}>
      <img
        className="Loading__image"
        src={loading}
        alt="loading"
      />
    </div>
  );
};

export default Loading;
