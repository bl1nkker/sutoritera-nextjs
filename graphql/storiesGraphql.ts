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

export const createStory = gql`
  mutation createStory($title: String!, $content:String!){
  createStory(storyInput:{title:$title, content:$content}){
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