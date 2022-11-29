import React, { ReactNode } from 'react';

import './layout.scss';

interface Props {
    children: ReactNode;
}

const Layout = (props: Props) => {
    const { children } = props;
    return (
        <div className="layout-wrapper">
            <div className="layout-inner">{children}</div>
        </div>
    );
};

export default Layout;
