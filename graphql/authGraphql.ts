export const signUpUserMutation =`
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
export const signIsUserQuery =``