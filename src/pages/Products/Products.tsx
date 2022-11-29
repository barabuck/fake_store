import React, { ReactNode, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import ProductCard from '../../components/ProductCard/ProductCard';
import { productStore } from '../../store';
import ProductModal from '../../components/ProductModal/ProductModal';

import './products.scss';
import Filters from '../../components/Filters/Filters';

const Products = observer(() => {
    const { products, product, isLoadingProducts } = productStore;
    const [curProduct, setCurProduct] = useState<string>('');

    useEffect(() => {
        productStore.getProducts();
    }, []);

    useEffect(() => {
        if (curProduct) {
            productStore.getProduct(curProduct);
        }
    }, [curProduct]);

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
    };

    return (
        <div className="page-products">
            <Filters />
            {isLoadingProducts ? renderProductsSkeleton() : renderProducts()}
            {curProduct && (
                <ProductModal data={product} visible={!!curProduct} onClose={closeModal} />
            )}
        </div>
    );
});

export default Products;
