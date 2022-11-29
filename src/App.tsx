import React, { ReactNode, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import navigation from './route';
import Header from './components/layout/Header/Header';
import Layout from './components/layout/Layout/Layout';

import './App.scss';

function App() {
    const [theme, setTheme] = useState<string>('light');

    useEffect(() => {
        const curTheme: string | null = localStorage.getItem('fake-store-theme');
        if (curTheme) {
            setTheme(curTheme);
        }
    }, []);

    const changeTheme = (item: string) => {
        setTheme(item);
        localStorage.setItem('fake-store-theme', item);
    };

    const renderRoutes = (): ReactNode => {
        return (
            <Routes>
                {navigation.map((route) => (
                    <Route key={route.key} path={route.path} element={<route.component />} />
                ))}
                <Route path="*" element={<Navigate to="/products" />} />
            </Routes>
        );
    };

    return (
        <div className="app" data-theme={theme}>
            <Header navigation={navigation} theme={theme} onChangeTheme={changeTheme} />
            <Layout>{renderRoutes()}</Layout>
        </div>
    );
}

export default App;
