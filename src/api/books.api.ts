import axios from 'axios';

const Base_URL = import.meta.env.VITE_API_URL;

export const bookApi = axios.create({
  baseURL: `${Base_URL}/api`,
});