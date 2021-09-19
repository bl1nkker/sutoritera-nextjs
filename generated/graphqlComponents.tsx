import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
  __typename?: 'Mutation';
  createStory?: Maybe<StoryOperationMessage>;
  deleteStory?: Maybe<StoryOperationMessage>;
  updateStory?: Maybe<StoryOperationMessage>;
  interestedInStory?: Maybe<StoryOperationMessage>;
  unInterestedInStory?: Maybe<StoryOperationMessage>;
  signInUser?: Maybe<UserOperationMessage>;
  signUpUser?: Maybe<UserOperationMessage>;
  addUserToFriendsList?: Maybe<UserOperationMessage>;
  removeUserFromFriendsList?: Maybe<UserOperationMessage>;
};


export type MutationCreateStoryArgs = {
  storyInput: StoryInput;
};


export type MutationDeleteStoryArgs = {
  storyId: Scalars['ID'];
};


export type MutationUpdateStoryArgs = {
  storyInput: StoryInput;
  storyId: Scalars['ID'];
};


export type MutationInterestedInStoryArgs = {
  storyId: Scalars['ID'];
};


export type MutationUnInterestedInStoryArgs = {
  storyId: Scalars['ID'];
};


export type MutationSignInUserArgs = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type MutationSignUpUserArgs = {
  userInput: UserInput;
};


export type MutationAddUserToFriendsListArgs = {
  friendId: Scalars['ID'];
};


export type MutationRemoveUserFromFriendsListArgs = {
  friendId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  getStories?: Maybe<StoriesListOperationMessage>;
  getCreatedStories?: Maybe<StoriesListOperationMessage>;
  getUsers?: Maybe<UsersListOperationMessage>;
};

export type StoriesListOperationMessage = {
  __typename?: 'StoriesListOperationMessage';
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  result?: Maybe<Array<Story>>;
};

export type Story = {
  __typename?: 'Story';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  interestedUsers?: Maybe<Array<Scalars['ID']>>;
  creator: Scalars['ID'];
  createdAt?: Maybe<Scalars['String']>;
};

export type StoryInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type StoryOperationMessage = {
  __typename?: 'StoryOperationMessage';
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  result?: Maybe<Story>;
};


export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  friendsList?: Maybe<Array<Scalars['ID']>>;
  createdStories?: Maybe<Array<Scalars['ID']>>;
  interestingStories?: Maybe<Array<Scalars['ID']>>;
  lastOnline?: Maybe<Scalars['String']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type UserOperationMessage = {
  __typename?: 'UserOperationMessage';
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  result?: Maybe<User>;
};

export type UsersListOperationMessage = {
  __typename?: 'UsersListOperationMessage';
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  result?: Maybe<Array<User>>;
};

export type SignInUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInUserMutation = { __typename?: 'Mutation', signInUser?: Maybe<{ __typename?: 'UserOperationMessage', isSuccess?: Maybe<boolean>, message?: Maybe<string>, result?: Maybe<{ __typename?: 'User', id?: Maybe<string>, name?: Maybe<string>, email?: Maybe<string>, token?: Maybe<string> }> }> };

export type SignUpUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
}>;


export type SignUpUserMutation = { __typename?: 'Mutation', signUpUser?: Maybe<{ __typename?: 'UserOperationMessage', isSuccess?: Maybe<boolean>, message?: Maybe<string>, result?: Maybe<{ __typename?: 'User', name?: Maybe<string>, email?: Maybe<string>, id?: Maybe<string>, password?: Maybe<string>, token?: Maybe<string> }> }> };

export type GetStoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStoriesQuery = { __typename?: 'Query', getStories?: Maybe<{ __typename?: 'StoriesListOperationMessage', isSuccess?: Maybe<boolean>, message?: Maybe<string>, result?: Maybe<Array<{ __typename?: 'Story', id?: Maybe<string>, title?: Maybe<string>, content?: Maybe<string>, interestedUsers?: Maybe<Array<string>>, creator: string, createdAt?: Maybe<string> }>> }> };

export type CreateStoryMutationVariables = Exact<{
  title: Scalars['String'];
  content: Scalars['String'];
}>;


export type CreateStoryMutation = { __typename?: 'Mutation', createStory?: Maybe<{ __typename?: 'StoryOperationMessage', isSuccess?: Maybe<boolean>, message?: Maybe<string>, result?: Maybe<{ __typename?: 'Story', id?: Maybe<string>, title?: Maybe<string>, content?: Maybe<string>, interestedUsers?: Maybe<Array<string>>, creator: string, createdAt?: Maybe<string> }> }> };

export type UpdateStoryMutationVariables = Exact<{
  title: Scalars['String'];
  content: Scalars['String'];
  storyId: Scalars['ID'];
}>;


export type UpdateStoryMutation = { __typename?: 'Mutation', updateStory?: Maybe<{ __typename?: 'StoryOperationMessage', isSuccess?: Maybe<boolean>, message?: Maybe<string>, result?: Maybe<{ __typename?: 'Story', id?: Maybe<string>, title?: Maybe<string>, content?: Maybe<string>, interestedUsers?: Maybe<Array<string>>, creator: string, createdAt?: Maybe<string> }> }> };

export type DeleteStoryMutationVariables = Exact<{
  storyId: Scalars['ID'];
}>;


export type DeleteStoryMutation = { __typename?: 'Mutation', deleteStory?: Maybe<{ __typename?: 'StoryOperationMessage', isSuccess?: Maybe<boolean>, message?: Maybe<string>, result?: Maybe<{ __typename?: 'Story', id?: Maybe<string>, title?: Maybe<string>, content?: Maybe<string>, interestedUsers?: Maybe<Array<string>>, creator: string, createdAt?: Maybe<string> }> }> };

export type InterestedInStoryMutationVariables = Exact<{
  storyId: Scalars['ID'];
}>;


export type InterestedInStoryMutation = { __typename?: 'Mutation', interestedInStory?: Maybe<{ __typename?: 'StoryOperationMessage', isSuccess?: Maybe<boolean>, message?: Maybe<string>, result?: Maybe<{ __typename?: 'Story', id?: Maybe<string>, title?: Maybe<string>, content?: Maybe<string>, interestedUsers?: Maybe<Array<string>>, creator: string, createdAt?: Maybe<string> }> }> };

export type UnInterestedInStoryMutationVariables = Exact<{
  storyId: Scalars['ID'];
}>;


export type UnInterestedInStoryMutation = { __typename?: 'Mutation', unInterestedInStory?: Maybe<{ __typename?: 'StoryOperationMessage', isSuccess?: Maybe<boolean>, message?: Maybe<string>, result?: Maybe<{ __typename?: 'Story', id?: Maybe<string>, title?: Maybe<string>, content?: Maybe<string>, interestedUsers?: Maybe<Array<string>>, creator: string, createdAt?: Maybe<string> }> }> };


export const SignInUserDocument = gql`
    mutation signInUser($email: String!, $password: String!) {
  signInUser(email: $email, password: $password) {
    isSuccess
    message
    result {
      id
      name
      email
      token
    }
  }
}
    `;
export type SignInUserMutationFn = Apollo.MutationFunction<SignInUserMutation, SignInUserMutationVariables>;

/**
 * __useSignInUserMutation__
 *
 * To run a mutation, you first call `useSignInUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInUserMutation, { data, loading, error }] = useSignInUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInUserMutation(baseOptions?: Apollo.MutationHookOptions<SignInUserMutation, SignInUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInUserMutation, SignInUserMutationVariables>(SignInUserDocument, options);
      }
export type SignInUserMutationHookResult = ReturnType<typeof useSignInUserMutation>;
export type SignInUserMutationResult = Apollo.MutationResult<SignInUserMutation>;
export type SignInUserMutationOptions = Apollo.BaseMutationOptions<SignInUserMutation, SignInUserMutationVariables>;
export const SignUpUserDocument = gql`
    mutation signUpUser($email: String!, $password: String!, $name: String, $avatar: String) {
  signUpUser(
    userInput: {email: $email, password: $password, name: $name, avatar: $avatar}
  ) {
    isSuccess
    message
    result {
      name
      email
      id
      password
      token
    }
  }
}
    `;
export type SignUpUserMutationFn = Apollo.MutationFunction<SignUpUserMutation, SignUpUserMutationVariables>;

/**
 * __useSignUpUserMutation__
 *
 * To run a mutation, you first call `useSignUpUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      name: // value for 'name'
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useSignUpUserMutation(baseOptions?: Apollo.MutationHookOptions<SignUpUserMutation, SignUpUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpUserMutation, SignUpUserMutationVariables>(SignUpUserDocument, options);
      }
export type SignUpUserMutationHookResult = ReturnType<typeof useSignUpUserMutation>;
export type SignUpUserMutationResult = Apollo.MutationResult<SignUpUserMutation>;
export type SignUpUserMutationOptions = Apollo.BaseMutationOptions<SignUpUserMutation, SignUpUserMutationVariables>;
export const GetStoriesDocument = gql`
    query getStories {
  getStories {
    isSuccess
    message
    result {
      id
      title
      content
      interestedUsers
      creator
      createdAt
    }
  }
}
    `;

/**
 * __useGetStoriesQuery__
 *
 * To run a query within a React component, call `useGetStoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetStoriesQuery, GetStoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStoriesQuery, GetStoriesQueryVariables>(GetStoriesDocument, options);
      }
export function useGetStoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStoriesQuery, GetStoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStoriesQuery, GetStoriesQueryVariables>(GetStoriesDocument, options);
        }
export type GetStoriesQueryHookResult = ReturnType<typeof useGetStoriesQuery>;
export type GetStoriesLazyQueryHookResult = ReturnType<typeof useGetStoriesLazyQuery>;
export type GetStoriesQueryResult = Apollo.QueryResult<GetStoriesQuery, GetStoriesQueryVariables>;
export const CreateStoryDocument = gql`
    mutation createStory($title: String!, $content: String!) {
  createStory(storyInput: {title: $title, content: $content}) {
    isSuccess
    message
    result {
      id
      title
      content
      interestedUsers
      creator
      createdAt
    }
  }
}
    `;
export type CreateStoryMutationFn = Apollo.MutationFunction<CreateStoryMutation, CreateStoryMutationVariables>;

/**
 * __useCreateStoryMutation__
 *
 * To run a mutation, you first call `useCreateStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStoryMutation, { data, loading, error }] = useCreateStoryMutation({
 *   variables: {
 *      title: // value for 'title'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreateStoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateStoryMutation, CreateStoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStoryMutation, CreateStoryMutationVariables>(CreateStoryDocument, options);
      }
export type CreateStoryMutationHookResult = ReturnType<typeof useCreateStoryMutation>;
export type CreateStoryMutationResult = Apollo.MutationResult<CreateStoryMutation>;
export type CreateStoryMutationOptions = Apollo.BaseMutationOptions<CreateStoryMutation, CreateStoryMutationVariables>;
export const UpdateStoryDocument = gql`
    mutation updateStory($title: String!, $content: String!, $storyId: ID!) {
  updateStory(storyInput: {title: $title, content: $content}, storyId: $storyId) {
    isSuccess
    message
    result {
      id
      title
      content
      interestedUsers
      creator
      createdAt
    }
  }
}
    `;
export type UpdateStoryMutationFn = Apollo.MutationFunction<UpdateStoryMutation, UpdateStoryMutationVariables>;

/**
 * __useUpdateStoryMutation__
 *
 * To run a mutation, you first call `useUpdateStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStoryMutation, { data, loading, error }] = useUpdateStoryMutation({
 *   variables: {
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      storyId: // value for 'storyId'
 *   },
 * });
 */
export function useUpdateStoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStoryMutation, UpdateStoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStoryMutation, UpdateStoryMutationVariables>(UpdateStoryDocument, options);
      }
export type UpdateStoryMutationHookResult = ReturnType<typeof useUpdateStoryMutation>;
export type UpdateStoryMutationResult = Apollo.MutationResult<UpdateStoryMutation>;
export type UpdateStoryMutationOptions = Apollo.BaseMutationOptions<UpdateStoryMutation, UpdateStoryMutationVariables>;
export const DeleteStoryDocument = gql`
    mutation deleteStory($storyId: ID!) {
  deleteStory(storyId: $storyId) {
    isSuccess
    result {
      id
      title
      content
      interestedUsers
      creator
      createdAt
    }
    message
  }
}
    `;
export type DeleteStoryMutationFn = Apollo.MutationFunction<DeleteStoryMutation, DeleteStoryMutationVariables>;

/**
 * __useDeleteStoryMutation__
 *
 * To run a mutation, you first call `useDeleteStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStoryMutation, { data, loading, error }] = useDeleteStoryMutation({
 *   variables: {
 *      storyId: // value for 'storyId'
 *   },
 * });
 */
export function useDeleteStoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStoryMutation, DeleteStoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStoryMutation, DeleteStoryMutationVariables>(DeleteStoryDocument, options);
      }
export type DeleteStoryMutationHookResult = ReturnType<typeof useDeleteStoryMutation>;
export type DeleteStoryMutationResult = Apollo.MutationResult<DeleteStoryMutation>;
export type DeleteStoryMutationOptions = Apollo.BaseMutationOptions<DeleteStoryMutation, DeleteStoryMutationVariables>;
export const InterestedInStoryDocument = gql`
    mutation interestedInStory($storyId: ID!) {
  interestedInStory(storyId: $storyId) {
    isSuccess
    result {
      id
      title
      content
      interestedUsers
      creator
      createdAt
    }
    message
  }
}
    `;
export type InterestedInStoryMutationFn = Apollo.MutationFunction<InterestedInStoryMutation, InterestedInStoryMutationVariables>;

/**
 * __useInterestedInStoryMutation__
 *
 * To run a mutation, you first call `useInterestedInStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInterestedInStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [interestedInStoryMutation, { data, loading, error }] = useInterestedInStoryMutation({
 *   variables: {
 *      storyId: // value for 'storyId'
 *   },
 * });
 */
export function useInterestedInStoryMutation(baseOptions?: Apollo.MutationHookOptions<InterestedInStoryMutation, InterestedInStoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InterestedInStoryMutation, InterestedInStoryMutationVariables>(InterestedInStoryDocument, options);
      }
export type InterestedInStoryMutationHookResult = ReturnType<typeof useInterestedInStoryMutation>;
export type InterestedInStoryMutationResult = Apollo.MutationResult<InterestedInStoryMutation>;
export type InterestedInStoryMutationOptions = Apollo.BaseMutationOptions<InterestedInStoryMutation, InterestedInStoryMutationVariables>;
export const UnInterestedInStoryDocument = gql`
    mutation unInterestedInStory($storyId: ID!) {
  unInterestedInStory(storyId: $storyId) {
    isSuccess
    result {
      id
      title
      content
      interestedUsers
      creator
      createdAt
    }
    message
  }
}
    `;
export type UnInterestedInStoryMutationFn = Apollo.MutationFunction<UnInterestedInStoryMutation, UnInterestedInStoryMutationVariables>;

/**
 * __useUnInterestedInStoryMutation__
 *
 * To run a mutation, you first call `useUnInterestedInStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnInterestedInStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unInterestedInStoryMutation, { data, loading, error }] = useUnInterestedInStoryMutation({
 *   variables: {
 *      storyId: // value for 'storyId'
 *   },
 * });
 */
export function useUnInterestedInStoryMutation(baseOptions?: Apollo.MutationHookOptions<UnInterestedInStoryMutation, UnInterestedInStoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnInterestedInStoryMutation, UnInterestedInStoryMutationVariables>(UnInterestedInStoryDocument, options);
      }
export type UnInterestedInStoryMutationHookResult = ReturnType<typeof useUnInterestedInStoryMutation>;
export type UnInterestedInStoryMutationResult = Apollo.MutationResult<UnInterestedInStoryMutation>;
export type UnInterestedInStoryMutationOptions = Apollo.BaseMutationOptions<UnInterestedInStoryMutation, UnInterestedInStoryMutationVariables>;