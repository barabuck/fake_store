import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, hamburger } from '../../../icons';
import { IRoute } from '../../../models';
import Switch from '../Switch/Switch';

import './header.scss';

interface Props {
    navigation: IRoute[];
    theme?: string;
    onChangeTheme?: (theme: string) => void;
}

const Header = (props: Props) => {
    const { navigation, theme, onChangeTheme } = props;
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const changeTheme = (bool: boolean) => {
        if (onChangeTheme) {
            onChangeTheme(bool ? 'light' : 'dark');
        }
    };

    const renderNavigate = (): ReactNode => {
        const nav: ReactNode[] = [];
        nav.push(
            <Switch
                key="switch"
                className="header-route-switch"
                checked={theme === 'light'}
                onChange={changeTheme}
            />
        );
        navigation.forEach((item) => {
            nav.push(
                <Link key={item.key} className="header-route-button" to={item.path}>
                    {item.name}
                </Link>
            );
        });
        return <nav className="header-route">{nav}</nav>;
    };

    const renderNavigateMob = (): ReactNode => {
        const nav: ReactNode[] = [];
        navigation.forEach((item) => {
            nav.push(
                <Link
                    key={item.key}
                    onClick={handleClick}
                    className="header-route-menu-button"
                    to={item.path}
                >
                    {item.name}
                </Link>
            );
        });
        nav.push(
            <Switch
                key="switch"
                className="header-route-switch"
                checked={theme === 'light'}
                onChange={changeTheme}
            />
        );
        return <nav className="header-route-menu">{nav}</nav>;
    };

    return (
        <header className="app-header">
            <div className="header-title">Fake Store</div>
            {renderNavigate()}
            <div
                role="button"
                aria-hidden="true"
                className="header-route-mob"
                onClick={handleClick}
            >
                {open ? <span className="header-route-mob-icon">{close}</span> : hamburger}
            </div>
            {open && renderNavigateMob()}
        </header>
    );
};

export default Header;
