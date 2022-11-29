import { AxiosResponse } from 'axios';
import api from '../http';

export default class AuthService {
    static async getCategories(): Promise<AxiosResponse<string[]>> {
        return api.get('/products/categories');
    }
}
