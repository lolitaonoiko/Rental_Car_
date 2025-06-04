import { lazy } from 'react';
import { useNavigate } from 'react-router-dom';

import useMedia from '../../hooks/useMedia';

import s from './HeroSection.module.css';

const Button = lazy(() => import('../Button/Button'));

const HeroSection = () => {
    const navigate = useNavigate();
    const { isMobile, isTablet } = useMedia();

    const handleBtnClick = () => {
        return navigate('/catalog');
    };

    return (
        <section className={s.heroBack}>
            <div className={s.textBox}>
                <h2 className={s.title}>Find your perfect rental car</h2>
                <p className={s.descr}>Reliable and budget-friendly rentals for any journey</p>

                {(isMobile || isTablet) && <Button onClick={handleBtnClick} text="View Catalog" big={isTablet} />}
            </div>
        </section>
    );
};

export default HeroSection;
