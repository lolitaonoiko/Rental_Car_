import { lazy } from 'react';

const HeroSection = lazy(() => import('../../components/HeroSection/HeroSection'));

const HomePage = () => {
    return (
        <>
            <HeroSection />
        </>
    );
};

export default HomePage;
