import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { lazy } from 'react';

import './App.css';

const Layout = lazy(() => import('./components/Layout/Layout.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CarDetailsPage = lazy(() => import('./pages/CarDetailsPage/CarDetailsPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx'));

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/catalog/:id" element={<CarDetailsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <ToastContainer position="top-center" pauseOnHover />
            </Layout>
        </>
    );
}

export default App;
