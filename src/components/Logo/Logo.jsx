import { Link } from 'react-router-dom';

import s from './Logo.module.css';

const Logo = () => {
    return (
        <Link to="/" className={s.logoBtn}>
            <svg width="104" height="16">
                <use href="/icons/sprite.svg#icon-logo"></use>
            </svg>
        </Link>
    );
};

export default Logo;
