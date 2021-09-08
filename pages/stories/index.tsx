import Head from "next/head";
import { useMutation, useQuery } from "@apollo/client";
import { initializeApollo } from "../../lib/apolloClient";
import { GetServerSideProps } from "next";
import { GET_STORIES_QUERY } from "../../lib/queries/storiesGraphql";
import { MouseEvent, useEffect, useState } from "react";
import { useCreateStoryMutation } from "../../generated/graphqlComponents";

export default function StoriesContainer() {
  const {
    data: {
      getStories: { result },
    },
  } = useQuery(GET_STORIES_QUERY);

  const [storiesList, setStoriesList] = useState<any[]>([]);
  const [queryError, setQueryError] = useState<boolean>(false);
  const [createStoryMutation] = useCreateStoryMutation({ variables: {} });

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
        setStoriesList((prevState) => [...prevState, createdStory]);
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
          <button onClick={(event) => handleCreateStory(event)}>
            Create new post
          </button>
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
