import Head from "next/head";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../lib/apolloClient";
import { GetStaticProps } from "next";
import { GET_STORIES_QUERY } from "./../../lib/queries/getStoriesQuery";

export default function StoriesContainer() {
  const {
    data: {
      getStories: { result },
    },
  } = useQuery(GET_STORIES_QUERY);
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log(ctx);
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_STORIES_QUERY,
  });

  return { props: { initialApolloState: apolloClient.cache.extract() } };
};
