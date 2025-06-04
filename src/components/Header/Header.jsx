import { lazy } from 'react';

import useMedia from '../../hooks/useMedia';

import s from './Header.module.css';

const Logo = lazy(() => import('../Logo/Logo'));
const Navigation = lazy(() => import('../Navigation/Navigation'));
const BurgerMenu = lazy(() => import('../BurgerMenu/BurgerMenu'));
const FavoritesList = lazy(() => import('../FavoritesList/FavoritesList'));

const Header = () => {
    const { isMobile, isTablet } = useMedia();

    return (
        <header className={s.header}>
            <Logo />
            {isTablet && <Navigation />}
            {isMobile && (
                <>
                    <span className={s.span}>
                        <FavoritesList />
                    </span>
                    <BurgerMenu />
                </>
            )}
        </header>
    );
};

export default Header;
