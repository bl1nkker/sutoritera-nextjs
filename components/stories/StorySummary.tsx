import React, {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
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
  const [currentStory, setCurrentStory] = useState<IStory>();
  const [currentUid, setCurrentUid] = useState<string>("");
  useEffect(() => {
    setCurrentStory(story);
  }, [story]);
  useEffect(() => {
    setCurrentUid(currentUserId);
  }, [currentUserId]);
  const handleChangeForm = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    setFormData({
      ...(currentStory as IInputData),
      storyId: currentStory?.id as string,
    });
    setFormMode("edit");
  };
  return (
    <div>
      <h3>{currentStory?.title}</h3>
      <p>{currentStory?.content}</p>
      {currentUid === currentStory?.creator && (
        <button onClick={(event) => handleChangeForm(event)}>Edit story</button>
      )}
      {currentUid === currentStory?.creator && (
        <button
          onClick={(event) =>
            handleDeleteStory(event, currentStory?.id as string)
          }
        >
          Delete story
        </button>
      )}
      {currentStory?.interestedUsers?.indexOf(currentUid) === -1 ? (
        <button
          onClick={(event) =>
            handleInterestedInStory(event, currentStory?.id as string)
          }
        >
          Interesting!
        </button>
      ) : (
        <button
          onClick={(event) =>
            handleUnInterestedInStory(event, currentStory?.id as string)
          }
        >
          Bruh...
        </button>
      )}
    </div>
  );
};
