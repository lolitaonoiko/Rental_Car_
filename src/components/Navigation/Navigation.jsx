import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { lazy } from 'react';

import useMedia from '../../hooks/useMedia';

import s from './Navigation.module.css';

const FavoritesList = lazy(() => import('../FavoritesList/FavoritesList'));

const Navigation = ({ onClose }) => {
    const { isMobile, isTablet } = useMedia();

    const buildLinkClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active);
    };

    const buildMobWrapperClass = isMobile => {
        return clsx(isMobile && s.mobWrapper);
    };

    return (
        <div className={buildMobWrapperClass(isMobile)}>
            <nav>
                <ul className={s.navList}>
                    {isTablet && (
                        <li className={s.favListItem}>
                            <FavoritesList />
                        </li>
                    )}
                    <li>
                        <NavLink to="/" className={buildLinkClass} onClick={onClose}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/catalog" className={buildLinkClass} onClick={onClose}>
                            Catalog
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
