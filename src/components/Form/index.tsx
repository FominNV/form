import {
  ChangeEvent,
  FC,
  FormEvent,
  MouseEvent,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import Img from "components/Img";
import Input from "components/Input";
import Loader from "components/Loader";
import Select from "components/Select";
import Button from "components/Button";
import Loading from "components/Loading";
import Textarea from "components/Textarea";
import Checkbox from "components/Checkbox";
import { ReactComponent as Settings } from "assets/icons/settings.svg";
import { ReactComponent as Video } from "assets/icons/video.svg";
import { ReactComponent as Image } from "assets/icons/image.svg";
import classNames from "classnames";
import { randomKey } from "common";
import comment from "assets/images/comment.png";
import { dataAddCheckboxes, dataAddInputs, dataSelect } from "./data";
import { CategoryMode, IImage, IInput } from "./types";

import "./styles.scss";

const Form: FC = () => {
  const [name, setName] = useState<string>("");
  const [cost, setCost] = useState<string>("");
  const [videoLink, setVideoLink] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [category, setCategory] = useState<string>("категория");
  const [loadedImages, setLoadedImages] = useState<IImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const setCurrentCategory = useCallback<
  EventFunc<MouseEvent<HTMLDivElement>>
  >(
    (e) => {
      if (e.currentTarget.dataset.category) {
        setLoading(true);
        setCategory(e.currentTarget.dataset.category);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    },
    [],
  );

  const onChangeTextHandler = useCallback<
  EventFunc<ChangeEvent<HTMLTextAreaElement>>
  >((e) => {
    setText(e.currentTarget.value);
  }, []);

  const onSubmitHandler = useCallback<EventFunc<FormEvent>>((e) => {
    e.preventDefault();
  }, []);

  const addLoadedImage = useCallback<VoidFunc<File>>(
    async (file) => {
      const reader = await new FileReader();
      await reader.readAsDataURL(file);
      reader.onload = (e) => {
        const newImage: IImage = {
          id: randomKey(),
          name: file.name,
          path: e.target?.result as string,
        };
        setLoadedImages([...loadedImages, newImage]);
      };
    },
    [loadedImages],
  );

  const removeLoadedImage = useCallback<VoidFunc<string>>(
    (id) => {
      const filtereImages = loadedImages.filter((elem) => elem.id !== id);
      setLoadedImages(filtereImages);
    },
    [loadedImages],
  );

  const inputs = useMemo<ReactNode>(() => {
    const inputProps: IInput[] = [
      {
        key: "form_input_name",
        value: name,
        placeholder: "название",
        setState: setName,
      },
      {
        key: "form_input_cost",
        value: cost,
        placeholder: "стоимость",
        setState: setCost,
      },
    ];

    return inputProps.map((elem) => (
      <Input
        key={elem.key}
        value={elem.value}
        placeholder={elem.placeholder}
        setState={elem.setState}
      />
    ));
  }, [name, cost, setName, setCost]);

  const addCheckboxes = useMemo<ReactNode>(() => dataAddCheckboxes.map((elem) => (
    <div className="Form__add-checkboxes_wrap">
      <Checkbox />
      <div className="Form__add-checkboxes_text">{elem}</div>
    </div>
  )), []);

  const addInputs = useMemo(
    () => dataAddInputs.map((elem) => (
      <div className="Form__add-inputs_wrap">
        <p className="Form__add-inputs_text">{elem}</p>
        <input
          className="Form__add-inputs_input"
          type="text"
        />
      </div>
    )),
    [],
  );

  const images = useMemo<ReactNode>(
    () => loadedImages.map((elem) => (
      <Img
        key={elem.id}
        id={elem.id}
        src={elem.path}
        alt={elem.name}
        removeLoadedImage={removeLoadedImage}
      />
    )),
    [loadedImages, removeLoadedImage],
  );

  const addCheckboxesClassName = classNames("Form__add-checkboxes", {
    "Form__add-checkboxes_hidden": category !== CategoryMode.PROJECTS,
  });

  const addInputsClassName = classNames("Form__add-inputs", {
    "Form__add-inputs_hidden": category !== CategoryMode.PROJECTS,
  });

  return (
    <div className="Form">
      <form
        onSubmit={onSubmitHandler}
        className="Form__form"
      >
        {inputs}

        <Select
          name={category}
          data={dataSelect}
          setCurrentCategory={setCurrentCategory}
        />

        <div className={addCheckboxesClassName}>{addCheckboxes}</div>

        <p className="Form__title">Описание</p>

        <div className="Form__row">
          <div className="Form__row_icon">
            <Settings />
          </div>
          <div className="Form__row_item">
            <p className="Form__text Form__text_bold Form__text_bb-dashed">
              cвойства и детали
            </p>
            <p className="Form__text Form__text_gray Form__text_fs-12">
              например, квадратура, размеры и т.д
            </p>
            <p className="Form__text Form__text_gray Form__text_fs-12">
              Сначала выберите категорию
            </p>
          </div>
        </div>

        <div className={addInputsClassName}>{addInputs}</div>

        <div className="Form__row">
          <div className="Form__row_icon">
            <Video />
          </div>
          <div className="Form__row_item">
            <Input
              key="form_input_video"
              value={videoLink}
              placeholder="ссылка на видео"
              setState={setVideoLink}
            />
          </div>
        </div>

        <div className="Form__row">
          <div className="Form__row_icon">
            <Image />
          </div>
          <div className="Form__row_item">
            <Loader addLoadedImage={addLoadedImage} />
          </div>
        </div>

        <div className="Form__images">{images}</div>

        <div className="Form__textarea-wrap">
          <Textarea
            value={text}
            onChange={onChangeTextHandler}
          />
        </div>

        <div className="Form__comment">
          <img
            className="Form__comment_image"
            src={comment}
            alt="comment"
          />
          <p className="Form__comment_text">Комментарии разрешены</p>
          <Checkbox />
        </div>

        <div className="Form__button-wrap">
          <Button name="создать" />
        </div>
      </form>

      <Loading show={loading} />
    </div>
  );
};

export default Form;
