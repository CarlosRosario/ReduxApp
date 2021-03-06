import axios from 'axios';

export const POSTS_ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=carlosRules';
export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
  const request = axios.get(`${POSTS_ROOT_URL}/posts${API_KEY }`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
