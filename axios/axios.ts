import axios, { AxiosResponse } from 'axios'
import { AxiosInstance } from 'axios'
import { signUpUserMutation } from '../graphql/authGraphql'
import { getStoriesQuery } from '../graphql/storiesGraphql'
const API:AxiosInstance = axios.create({ baseURL: 'http://localhost:4000/graphql' })

export const fetchStoriesAxios = () => API.post('/',  { query: getStoriesQuery })
export const signUpUserAxios = ({ email, password, name, avatar }:any) => API.post('/', { query:signUpUserMutation, variables: { email, password, name, avatar } })
