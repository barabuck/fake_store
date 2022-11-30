import React, { ReactNode } from 'react';

import './error-screen.scss';

interface Props {
    className?: string;
    message?: string | ReactNode;
}

const ErrorScreen = (props: Props) => {
    const { className, message } = props;
    return (
        <div className={`app-error-screen ${className || ''}`}>
            {message || 'Сurrently unavailable'}
        </div>
    );
};

export default ErrorScreen;
