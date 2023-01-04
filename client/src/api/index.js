import axios from 'axios'

const url = process.env.REACT_APP_URL

export const fetchPosts = () => axios.get(url)
export const getPost = (id) => axios.get(`${url}/${id}`)
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
export const deletePost = (id) => axios.delete(`${url}/${id}`)