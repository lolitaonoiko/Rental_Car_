import { Suspense } from 'react';

import Header from '../Header/Header';

import s from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={s.layout}>
            <Header />
            <Suspense fallback={null}>{children}</Suspense>
        </div>
    );
};

export default Layout;
