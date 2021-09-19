import gql from "graphql-tag"

export const signInUser = gql`
mutation signInUser($email:String!, $password:String!){
  signInUser(email:$email, password:$password){
    isSuccess
    message
    result{
      id
      name
      email
      token
    }
  }
}
`

export const signUpUser = gql`
mutation signUpUser($email: String!, $password: String!, $name: String, $avatar: String){
    signUpUser(userInput:{ email:$email, password:$password, name:$name, avatar:$avatar }){
        isSuccess
        message
        result{
          name
          email
          id
          password
          token
        }
    }
  }
`