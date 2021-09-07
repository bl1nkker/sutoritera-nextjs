import Head from "next/head";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../lib/apolloClient";
import { GetServerSideProps, NextPageContext } from "next";
import { GET_STORIES_QUERY } from "./../../lib/queries/getStoriesQuery";

export default function StoriesContainer() {
  const {
    data: {
      getStories: { result },
    },
  } = useQuery(GET_STORIES_QUERY, {
    context: { headers: "mycookie1=myvalue1" },
  });
  return (
    <div>
      <Head>
        <title>My stories</title>
      </Head>

      <main>
        {result.map((story: any, key: number) => (
          <div key={key}>{story.title}</div>
        ))}
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
