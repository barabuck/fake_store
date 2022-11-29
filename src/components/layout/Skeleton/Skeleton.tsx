import React from 'react';

import './skeleton.scss';

interface Props {
    className?: string;
}

const Skeleton = (props: Props) => {
    const { className } = props;
    return <span className={`app-skeleton ${className || ''}`} />;
};

export default Skeleton;
