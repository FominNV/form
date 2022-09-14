import { FC, useCallback } from "react";
import { ReactComponent as Close } from "assets/icons/close.svg";
import  { IImgProps } from "./types";

import "./styles.scss";

const Img: FC<IImgProps> = ({
  id, src, alt, removeLoadedImage,
}) => {
  const onClickHandler = useCallback(() => {
    removeLoadedImage(id);
  }, [id, removeLoadedImage]);

  return (
    <div className="Img">
      <img
        className="Img__image"
        src={src}
        alt={alt}
      />
      <button
        className="Img__button"
        onClick={onClickHandler}
      >
        <div className="Img__button_icon">
          <Close />
        </div>
      </button>
    </div>
  );
};

export default Img;
