import { AxiosResponse } from 'axios';
import config from '../config';
import api from '../http';
import { IFilter, IProduct } from '../models';

export default class ProductService {
    static async getProduct(id: string): Promise<AxiosResponse<IProduct>> {
        return api.get(`/products/${id}`);
    }

    static async getProducts(filter: IFilter): Promise<AxiosResponse<IProduct[]>> {
        return api.get(
            filter.category !== 'all' ? `/products/category/${filter.category}` : '/products',
            {
                params: { sort: filter.sort, limit: config.limit },
            }
        );
    }
}
