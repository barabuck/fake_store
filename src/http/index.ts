import axios, { AxiosError, AxiosResponse } from 'axios';
import config from '../config';

export const API_URL = config.apiUrl;

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error: AxiosError) => {
        return Promise.reject(error);
    }
);

export default api;
