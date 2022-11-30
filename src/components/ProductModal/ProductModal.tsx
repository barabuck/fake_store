import React, { ReactNode } from 'react';
import { rate } from '../../icons';
import { IProduct } from '../../models';
import ErrorScreen from '../layout/ErrorScreen/ErrorScreen';
import Modal from '../layout/Modal/Modal';
import Skeleton from '../layout/Skeleton/Skeleton';

import './product-modal.scss';

interface Props {
    visible?: boolean;
    loading?: boolean;
    data: IProduct | null;
    error?: boolean;
    onClose?: () => void;
}

const ProductModal = (props: Props) => {
    const { visible, loading, data, error, onClose } = props;

    const renderProduct = (): ReactNode => {
        return (
            <>
                <div className="product-modal-image">
                    <img src={data?.image || ''} alt={data?.title || ''} />
                </div>
                <div className="product-modal-info">
                    <div className="product-modal-title">
                        <div className="product-modal-text">{data && data.title}</div>
                        <div className="product-modal-data">
                            <div className="product-modal-rate">
                                {rate}
                                {data && data.rating.rate}
                            </div>
                            <div className="product-modal-price">{`${data && data.price} $`}</div>
                        </div>
                    </div>
                    <div className="product-modal-descriprion">{data && data.description}</div>
                    <div className="product-modal-count">{`${data && data.rating.count} sold`}</div>
                </div>
            </>
        );
    };

    const renderSkeleton = (): ReactNode => {
        return (
            <>
                <div className="product-modal-image">
                    <Skeleton className="product-modal-skeleton" />
                </div>
                <div className="product-modal-info">
                    <div className="product-modal-title">
                        <div className="product-modal-text">
                            <Skeleton className="product-modal-skeleton" />
                        </div>
                        <div className="product-modal-data">
                            <div className="product-modal-rate">
                                <Skeleton className="product-modal-skeleton" />
                            </div>
                            <div className="product-modal-price">
                                <Skeleton className="product-modal-skeleton" />
                            </div>
                        </div>
                    </div>
                    <div className="product-modal-descriprion">
                        <Skeleton className="product-modal-skeleton" />
                    </div>
                    <div className="product-modal-count">
                        <Skeleton className="product-modal-skeleton" />
                    </div>
                </div>
            </>
        );
    };

    return (
        <Modal className="app-product-modal" visible={visible} onClose={onClose}>
            <div className="product-modal-wrapper">
                {error && <ErrorScreen className="product-modal-error" />}
                {!error && (loading || !data ? renderSkeleton() : renderProduct())}
            </div>
        </Modal>
    );
};

export default ProductModal;
