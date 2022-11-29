import React, { ReactNode } from 'react';
import { rate } from '../../icons';
import { IProduct } from '../../models';
import Skeleton from '../layout/Skeleton/Skeleton';

import './product-card.scss';

interface Props {
    className?: string;
    loading?: boolean;
    data?: IProduct;
    onClick?: (id: string, data: IProduct) => void;
}

const ProductCard = (props: Props) => {
    const { className, loading, data, onClick } = props;

    const renderCard = (): ReactNode => {
        return (
            <>
                <div className="product-card-image">
                    <img src={data && data.image} alt={data && data.title} />
                </div>
                <div className="product-card-title">{data && data.title}</div>
                <div className="product-card-price">{`${data && data.price} $`}</div>
                <div className="product-card-info">
                    <div className="product-card-count">{`${data && data.rating.count} sold`}</div>
                    <div className="product-card-rate">
                        {rate}
                        {data && data.rating.rate}
                    </div>
                </div>
            </>
        );
    };

    const renderSkeleton = (): ReactNode => {
        return (
            <>
                <div className="product-card-image">
                    <Skeleton className="product-card-skeleton" />
                </div>
                <div className="product-card-title">
                    <Skeleton className="product-card-skeleton" />
                </div>
                <div className="product-card-price">
                    <Skeleton className="product-card-skeleton" />
                </div>
                <div className="product-card-info">
                    <Skeleton className="product-card-skeleton" />
                    <Skeleton className="product-card-skeleton" />
                </div>
            </>
        );
    };

    const handlerClick = () => {
        if (onClick && data && !loading) {
            onClick(data.id, data);
        }
    };

    return (
        <div
            role="button"
            aria-hidden="true"
            onClick={handlerClick}
            className={`app-product-card ${className || ''} ${loading ? 'load' : 'noload'}`}
        >
            {loading || !data ? renderSkeleton() : renderCard()}
        </div>
    );
};

export default ProductCard;
