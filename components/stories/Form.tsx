import React, { Dispatch, MouseEvent, SetStateAction } from "react";

interface Props {
  formData: IInputData;
  setFormData: Dispatch<SetStateAction<IInputData>>;
  handleSendForm: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
}

interface IInputData {
  title: string;
  content: string;
  storyId: string;
}

const Form: React.FC<Props> = ({ handleSendForm, formData, setFormData }) => {
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <form>
      <label>Title</label>
      <input
        name="title"
        value={formData.title}
        onChange={(event) => handleChangeInput(event)}
      />
      <label>Content</label>
      <input
        name="content"
        value={formData.content}
        onChange={(event) => handleChangeInput(event)}
      />
      <button onClick={(event) => handleSendForm(event)}>
        Create new story
      </button>
    </form>
  );
};

export default Form;
