import axios, { AxiosError, AxiosResponse } from 'axios';

export const API_URL = 'https://fakestoreapi.com';

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
