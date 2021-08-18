import { gql } from '@apollo/client'

export const GET_STORIES_QUERY = gql`
  query getStories {
    getStories {
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
`;