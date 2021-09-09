import Head from "next/head";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../lib/apolloClient";
import { GetServerSideProps } from "next";
import { GET_STORIES_QUERY } from "../../lib/queries/storiesGraphql";
import { MouseEvent, useEffect, useState } from "react";
import {
  useCreateStoryMutation,
  useUpdateStoryMutation,
} from "../../generated/graphqlComponents";
import Form from "../../components/stories/Form";
import { IStory } from "../../interfaces/interfaces";
import { StorySummary } from "../../components/stories/StorySummary";

interface IInputData {
  title: string;
  content: string;
  storyId: string;
}

export default function StoriesContainer() {
  // Hooks
  const [storiesList, setStoriesList] = useState<IStory[]>([{}]);
  const [queryError, setQueryError] = useState<boolean>(false);
  const [formData, setFormData] = useState<IInputData>({
    title: "",
    content: "",
    storyId: "",
  });
  // create, edit
  const [formMode, setFormMode] = useState<string>("create");

  // Use CodeGen for mutations and default grapql hook for SSR data
  // GraphQL
  const {
    data: {
      getStories: { result },
    },
  } = useQuery(GET_STORIES_QUERY);
  const [createStoryMutation] = useCreateStoryMutation({
    variables: {
      title: formData.title,
      content: formData.content,
    },
  });
  const [updateStoryMutation] = useUpdateStoryMutation({
    variables: {
      title: formData.title,
      content: formData.content,
      storyId: formData.storyId,
    },
  });

  useEffect(() => {
    setStoriesList(result);
  }, [result]);

  // Create
  const handleSendForm = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    if (formMode === "edit") {
      // edit mutation
      updateStoryMutation().then((response) => {
        const isSuccess = response.data?.updateStory?.isSuccess;
        if (isSuccess) {
          const updatedStory = response.data?.updateStory?.result;

          setStoriesList([
            ...storiesList.map((story) =>
              story.id === updatedStory?.id ? (updatedStory as IStory) : story
            ),
          ]);
          console.log("Story updated!");
        } else {
          const errorMessage = response.data?.updateStory?.message;
          setQueryError(true);
          console.log(errorMessage);
        }
      });
    } else if (formMode === "create") {
      // create mutation
      createStoryMutation().then((response) => {
        const isSuccess = response.data?.createStory?.isSuccess;
        if (isSuccess) {
          const createdStory = response.data?.createStory?.result;
          setStoriesList([...storiesList, createdStory as IStory]);
          console.log("Story created!");
        } else {
          const errorMessage = response.data?.createStory?.message;
          setQueryError(true);
          console.log(errorMessage);
        }
      });
    }
  };

  return (
    <div>
      <Head>
        <title>My stories</title>
      </Head>

      <main>
        <section>
          {storiesList.map((story: any, key: number) => (
            <StorySummary
              setFormData={setFormData}
              story={story}
              key={key}
              setFormMode={setFormMode}
            />
          ))}
        </section>
        {/* Form required */}
        <section>
          <Form
            formData={formData}
            setFormData={setFormData}
            handleSendForm={handleSendForm}
          />
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Here i need to pass context
  const apolloClient = initializeApollo(undefined, context);
  await apolloClient.query({
    query: GET_STORIES_QUERY,
  });

  return { props: { initialApolloState: apolloClient.cache.extract() } };
};
