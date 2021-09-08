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

export const CREATE_STORY_MUTATION = gql`
  mutation createStory{
  createStory(storyInput:{title:"New nextjs story", content:"New nextjs story"}){
    isSuccess
    message
    result{
      creator
      title
      content
    }
  }
}
`