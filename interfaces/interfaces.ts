export interface IAuthCredentialsInput {
    email: string;
    password: string;
    name?: string;
    avatar?: string;
  }

  export interface IStory{
    id?: string
    title?: String,
    content?: String,
    interestedUsers?:[string],
    creator?: string,
    createdAt?: String
  }

  export interface IUser{
    id: number
    email: String,
    password: String,
    name: String,
    avatar: String,
    friendsList:[number],
    createdStories:[number],
    interestingStories:[number],
    lastOnline: String,
    isOnline: Boolean,
    token: String
  }