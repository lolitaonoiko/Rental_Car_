import { lazy } from 'react';

const HeroSection = lazy(() => import('../../components/HeroSection/HeroSection'));

const HomePage = () => {
    return (
        <section>
            <HeroSection />
        </section>
    );
};

export default HomePage;
