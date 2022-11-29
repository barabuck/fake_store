import React, { ReactNode } from 'react';
import { close } from '../../../icons';

import './modal.scss';

interface Props {
    visible?: boolean;
    className?: string;
    title?: string;
    footer?: ReactNode;
    children?: string | ReactNode;
    onClose?: (bool: boolean) => void;
}

const Modal = (props: Props) => {
    const { visible, className, title, footer, children, onClose } = props;

    const handlerClose = () => {
        if (onClose) {
            onClose(false);
        }
    };

    return (
        <div className={`app-modal ${className || ''} ${visible ? 'visible' : 'hidden'}`}>
            <div className="modal-wrapper">
                <div className="modal-header">
                    <span className="modal-header-title">{title || ''}</span>
                    <span
                        role="button"
                        aria-hidden="true"
                        className="modal-header-close"
                        onClick={handlerClose}
                    >
                        {close}
                    </span>
                </div>
                <div className="modal-content">{children}</div>
                {footer && <div className="modal-footer">{footer}</div>}
            </div>
        </div>
    );
};

export default Modal;
