import { lazy } from 'react';
import s from './HeroSection.module.css';
import { useNavigate } from 'react-router-dom';

const Button = lazy(() => import('../Button/Button'));

const HeroSection = () => {
    const navigate = useNavigate();
    const handleBtnClick = () => {
        return navigate('/catalog');
    };
    return (
        <section className={s.heroBack}>
            <div>
                <h2 className={s.title}>Find your perfect rental car</h2>
                <p className={s.descr}>Reliable and budget-friendly rentals for any journey</p>
            </div>

            <Button onClick={handleBtnClick} text={'View Catalog'} big />
        </section>
    );
};

export default HeroSection;
