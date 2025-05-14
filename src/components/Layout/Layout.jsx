import { Suspense } from 'react';

import Header from '../Header/Header';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Suspense fallback={null}>{children}</Suspense>
        </div>
    );
};

export default Layout;
