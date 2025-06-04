import { lazy, Suspense } from 'react';

const Header = lazy(() => import('../Header/Header.jsx'));
const Loader = lazy(() => import('../Loader/Loader.jsx'));

const Layout = ({ children }) => {
    return (
        <section>
            <Header />
            <Suspense fallback={<Loader forSusp />}>{children}</Suspense>
        </section>
    );
};

export default Layout;
