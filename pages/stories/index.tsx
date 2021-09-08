import Head from "next/head";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../lib/apolloClient";
import { GetServerSideProps } from "next";
import { GET_STORIES_QUERY } from "../../lib/queries/storiesGraphql";
import { MouseEvent, useEffect, useState } from "react";
import { useCreateStoryMutation } from "../../generated/graphqlComponents";
import Form from "../../components/stories/Form";
import { IStory } from "../../interfaces/interfaces";

interface IInputData {
  title: string;
  content: string;
}

export default function StoriesContainer() {
  // Hooks
  const [storiesList, setStoriesList] = useState<IStory[]>([{}]);
  const [queryError, setQueryError] = useState<boolean>(false);
  const [formData, setFormData] = useState<IInputData>({
    title: "",
    content: "",
  });

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

  useEffect(() => {
    setStoriesList(result);
  }, [result]);

  const handleCreateStory = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
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
  };
  console.log(queryError);
  return (
    <div>
      <Head>
        <title>My stories</title>
      </Head>

      <main>
        <section>
          {storiesList.map((story: any, key: number) => (
            <div key={key}>{story.title}</div>
          ))}
        </section>
        {/* Form required */}
        <section>
          <Form
            formData={formData}
            setFormData={setFormData}
            handleCreateStory={handleCreateStory}
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
