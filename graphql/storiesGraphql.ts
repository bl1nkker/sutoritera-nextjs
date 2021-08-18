import gql from "graphql-tag";

export const getStories = gql`
query getStories{
    getStories{
        isSuccess
        message
        result {
          id
          title
          content
          creator
          interestedUsers
        }
    }
  }
`