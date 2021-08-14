export const getStoriesQuery = `
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