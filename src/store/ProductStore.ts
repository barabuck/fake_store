import { makeAutoObservable } from 'mobx';
import { IFilter, IProduct } from '../models';
import { ProductService } from '../services';

interface Product {
    product: IProduct | null;
    products: IProduct[] | null;
    isLoadingProduct: boolean;
    isLoadingProducts: boolean;
    errorProduct: any | null;
}

class ProductStore implements Product {
    product: IProduct | null = null;

    products: IProduct[] | null = null;

    isLoadingProduct = false;

    isLoadingProducts = false;

    errorProduct = null;

    constructor() {
        makeAutoObservable(this);
    }

    setProduct(data: IProduct | null) {
        this.product = data;
    }

    setProducts(data: IProduct[] | null) {
        this.products = data;
    }

    setIsLoadingProduct(bool: boolean) {
        this.isLoadingProduct = bool;
    }

    setIsLoadingProducts(bool: boolean) {
        this.isLoadingProducts = bool;
    }

    setError(data: any | null) {
        this.errorProduct = data;
    }

    async getProduct(id: string) {
        this.setIsLoadingProduct(true);
        try {
            const response = await ProductService.getProduct(id);
            this.setProduct(response.data);
            this.setError(null);
        } catch (error: any) {
            this.setError(error);
            this.setProduct(null);
        }
        this.setIsLoadingProduct(false);
    }

    async getProducts(filter: IFilter) {
        this.setIsLoadingProducts(true);
        try {
            const response = await ProductService.getProducts(filter);
            this.setProducts(response.data);
            this.setError(null);
        } catch (error: any) {
            this.setError(error);
            this.setProducts(null);
        }
        this.setIsLoadingProducts(false);
    }
}

const productStore = new ProductStore();

export default productStore;
