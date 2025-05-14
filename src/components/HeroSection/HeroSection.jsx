import Button from '../Button/Button';
import s from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <div className={s.heroBack}>
            <div>
                <h2 className={s.title}>Find your perfect rental car</h2>
                <p className={s.descr}>Reliable and budget-friendly rentals for any journey</p>
            </div>

            <Button text={'View Catalog'} big />
        </div>
    );
};

export default HeroSection;
