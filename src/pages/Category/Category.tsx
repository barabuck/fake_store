import React, { ReactNode, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { categoryStore } from '../../store';

import './category.scss';

const Category = observer(() => {
    const { categories } = categoryStore;

    useEffect(() => {
        if (!categories) {
            categoryStore.getCategories();
        }
    }, []);

    const renderCategories = (): ReactNode => {
        const categoryNodes: ReactNode[] = [];
        if (categories) {
            categories.forEach((item: string) => {
                categoryNodes.push(
                    <div key={item} className="categories-item">
                        {item}
                    </div>
                );
            });
        }
        return <div className="categories-items">{categoryNodes}</div>;
    };

    return (
        <div className="page-categories">
            <div className="categories-title">Category</div>
            {renderCategories()}
        </div>
    );
});

export default Category;
