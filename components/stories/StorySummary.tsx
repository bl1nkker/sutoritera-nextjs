import React, { Dispatch, MouseEvent, SetStateAction } from "react";
import { IStory } from "../../interfaces/interfaces";

interface Props {
  story: IStory;
  setFormData: Dispatch<SetStateAction<IInputData>>;
  setFormMode: Dispatch<SetStateAction<string>>;
  currentUserId: string;
  handleDeleteStory: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    storyId: string
  ) => void;
  handleInterestedInStory: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    storyId: string
  ) => void;
  handleUnInterestedInStory: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    storyId: string
  ) => void;
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
  currentUserId,
  handleDeleteStory,
  handleInterestedInStory,
  handleUnInterestedInStory,
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
      {currentUserId === story.creator && (
        <button onClick={(event) => handleChangeForm(event)}>Edit story</button>
      )}
      {currentUserId === story.creator && (
        <button
          onClick={(event) => handleDeleteStory(event, story.id as string)}
        >
          Delete story
        </button>
      )}
      {story.interestedUsers?.indexOf(currentUserId) === -1 ? (
        <button
          onClick={(event) =>
            handleInterestedInStory(event, story.id as string)
          }
        >
          Interesting!
        </button>
      ) : (
        <button
          onClick={(event) =>
            handleUnInterestedInStory(event, story.id as string)
          }
        >
          Bruh...
        </button>
      )}
    </div>
  );
};
