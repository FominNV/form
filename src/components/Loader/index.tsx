import { FC, useCallback, ChangeEvent } from "react";
import  { ILoaderProps } from "./types";

import "./styles.scss";

const Loader: FC<ILoaderProps> = ({ addLoadedImage }) => {
  const onChangeHandler = useCallback<EventFunc<ChangeEvent<HTMLInputElement>>>(
    (e) => {
      if (e.currentTarget.files) {
        addLoadedImage(e.currentTarget.files[0]);
      }
    },
    [addLoadedImage],
  );

  return (
    <div className="Loader">
      <label
        htmlFor="loader"
        className="Loader__label"
      >
        Загрузите картинки
      </label>
      <input
        id="loader"
        className="Loader__input"
        type="file"
        readOnly
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Loader;
