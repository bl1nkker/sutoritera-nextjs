import React, { Dispatch, MouseEvent, SetStateAction } from "react";
import { IStory } from "../../interfaces/interfaces";

interface Props {
  story: IStory;
  setFormData: Dispatch<SetStateAction<IInputData>>;
  setFormMode: Dispatch<SetStateAction<string>>;
}

interface IInputData {
  title: string;
  content: string;
  storyId: string;
}

export const StorySummary: React.FC<Props> = ({
  story,
  setFormData,
  setFormMode,
}) => {
  const handleChangeForm = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    setFormData({ ...(story as IInputData), storyId: story.id as string });
    setFormMode("edit");
  };
  return (
    <div>
      <h3>{story.title}</h3>
      <p>{story.content}</p>
      <button onClick={(event) => handleChangeForm(event)}>Edit story</button>
    </div>
  );
};
