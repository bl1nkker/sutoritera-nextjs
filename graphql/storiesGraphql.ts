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
      id
      creator
      title
      content
      createdAt
    }
  }
}
`
export const updateStory = gql`
  mutation updateStory($title: String!, $content: String!, $storyId: ID!){
    updateStory(storyInput:{title:$title, content:$content}, storyId:$storyId){
      isSuccess
      message
      result{
        id
        creator
      title
      content
      createdAt
      }
    }
  }
`
export const deleteStory = gql`
  mutation deleteStory($storyId: ID!){
    deleteStory(storyId:$storyId){
      isSuccess
      result{
        id
        creator
      }
      message
    }
  }
`