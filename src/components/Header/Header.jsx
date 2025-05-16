import s from './Header.module.css';
import { lazy } from 'react';

const Logo = lazy(() => import('../Logo/Logo'));
const Navigation = lazy(() => import('../Navigation/Navigation'));

const Header = () => {
    return (
        <header className={s.header}>
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;
