import axios from 'axios';

const API_BASE_URL = `https://api.spacexdata.com/v4/`;

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30_000,
});

export default axiosInstance;
