import { Cross as Hamburger } from 'hamburger-react';
import { lazy, useState } from 'react';

import s from './BurgerMenu.module.css';

const Navigation = lazy(() => import('../Navigation/Navigation'));

const BurgerMenu = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className={s.wrapper}>
                <Hamburger easing="ease-in" toggled={isOpen} toggle={setOpen} size={20} direction="right" label="Show menu" />
            </div>
            {isOpen && <Navigation burgerMenu onClose={() => setOpen(false)} isOpen />}
        </>
    );
};

export default BurgerMenu;
