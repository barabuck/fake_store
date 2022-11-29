import { AxiosResponse } from 'axios';
import api from '../http';
import { IProduct } from '../models';

export default class ProductService {
    static async getProduct(id: string): Promise<AxiosResponse<IProduct>> {
        return api.get(`/products/${id}`);
    }

    static async getProducts(): Promise<AxiosResponse<IProduct[]>> {
        return api.get(`/products?limit=50`);
    }
}
