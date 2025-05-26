import { lazy, Suspense } from 'react';

const Header = lazy(() => import('../Header/Header.jsx'));
const Loader = lazy(() => import('../Loader/Loader.jsx'));

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Suspense fallback={<Loader forSusp />}>{children}</Suspense>
        </div>
    );
};

export default Layout;
