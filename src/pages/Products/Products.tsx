import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { categoryStore, productStore } from '../../store';
import Filters from '../../components/Filters/Filters';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductModal from '../../components/ProductModal/ProductModal';

import './products.scss';
import { IFilter, ISelectOption } from '../../models';
import config from '../../config';
import ErrorScreen from '../../components/layout/ErrorScreen/ErrorScreen';

const Products = observer(() => {
    const { products, product, isLoadingProducts, errorProduct } = productStore;
    const { categories } = categoryStore;
    const [curProduct, setCurProduct] = useState<string>('');
    const [filter, setFilter] = useState<IFilter>({ category: 'all', sort: config.sort[0].value });

    useEffect(() => {
        if (!categories) {
            categoryStore.getCategories();
        }
    }, []);

    useEffect(() => {
        productStore.setError(null);
        if (filter.category && filter.sort) {
            productStore.getProducts(filter);
        }
    }, [filter]);

    useEffect(() => {
        if (curProduct) {
            productStore.getProduct(curProduct);
        }
    }, [curProduct]);

    const mempizedCategories: ISelectOption[] = useMemo(() => {
        const categoriesArr: ISelectOption[] = [{ label: 'all', value: 'all' }];
        if (categories) {
            categories.forEach((item) => {
                categoriesArr.push({ label: item, value: item });
            });
        }
        return categoriesArr;
    }, [categories]);

    const changeFilters = (obj: IFilter) => {
        if (obj.category !== filter.category || obj.sort !== filter.sort) {
            setFilter(obj);
        }
    };

    const renderProducts = (): ReactNode[] => {
        const cards: ReactNode[] = [];
        if (products) {
            products.forEach((card) => {
                cards.push(
                    <ProductCard onClick={(id) => setCurProduct(id)} key={card.id} data={card} />
                );
            });
        }
        return cards;
    };

    const renderProductsSkeleton = (): ReactNode[] => {
        const cards: ReactNode[] = [];
        for (let i = 0; i < 10; i += 1) {
            cards.push(<ProductCard key={i} loading />);
        }
        return cards;
    };

    const closeModal = () => {
        setCurProduct('');
        productStore.setProduct(null);
        productStore.setError(null);
    };

    return (
        <div className="page-products">
            <Filters categories={mempizedCategories} onChange={changeFilters} />
            {errorProduct && !products && <ErrorScreen className="products-error" />}
            {isLoadingProducts ? renderProductsSkeleton() : renderProducts()}
            {curProduct && (
                <ProductModal
                    error={!!errorProduct}
                    data={product}
                    visible={!!curProduct}
                    onClose={closeModal}
                />
            )}
        </div>
    );
});

export default Products;
