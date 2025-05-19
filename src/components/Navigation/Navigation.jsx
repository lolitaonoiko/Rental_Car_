import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';
import { lazy } from 'react';

const FavoritesList = lazy(() => import('../FavoritesList/FavoritesList'));

const Navigation = () => {
    const buildLinkClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active);
    };

    return (
        <>
            <nav>
                <ul className={s.navList}>
                    <li>
                        <FavoritesList />
                    </li>
                    <li>
                        <NavLink to="/" className={buildLinkClass}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/catalog" className={buildLinkClass}>
                            Catalog
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;
