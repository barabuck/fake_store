import { makeAutoObservable } from 'mobx';
import { CategoryService } from '../services';

interface Category {
    categories: string[] | null;
    isLoadingCategory: boolean;
    errorCategory: any | null;
}

class CategoryStore implements Category {
    categories: string[] | null = null;

    isLoadingCategory = false;

    errorCategory = null;

    constructor() {
        makeAutoObservable(this);
    }

    setCategories(data: string[] | null) {
        this.categories = data;
    }

    setIsLoading(bool: boolean) {
        this.isLoadingCategory = bool;
    }

    setError(data: any | null) {
        this.errorCategory = data;
    }

    async getCategories() {
        this.setIsLoading(true);
        try {
            const response = await CategoryService.getCategories();
            this.setCategories(response.data);
            this.setError(null);
        } catch (error: any) {
            if (error && error?.response && error?.response?.data) {
                this.setError(error.response.data);
            }
        }
        this.setIsLoading(false);
    }
}

const categoryStore = new CategoryStore();

export default categoryStore;
