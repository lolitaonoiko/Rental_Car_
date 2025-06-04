import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { lazy } from 'react';

import s from './Navigation.module.css';

const FavoritesList = lazy(() => import('../FavoritesList/FavoritesList'));

const Navigation = ({ burgerMenu = false, onClose }) => {
    const buildLinkClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active);
    };

    // const buildMobBoxClass = burgerMenu => {
    //     return clsx(burgerMenu && s.mobBox);
    // };

    // const buildMobNavClass = burgerMenu => {
    //     return clsx(s.navList, burgerMenu && s.mobNav);
    // };
    return (
        <div
            className={s.mobBox} //className={buildMobBoxClass(burgerMenu)}
        >
            <nav>
                <ul
                    className={s.mobNavList}
                    //</nav>className={buildMobNavClass(burgerMenu)}
                >
                    <li className={s.favListItem}>
                        <FavoritesList onClick={onClose} />
                    </li>
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
