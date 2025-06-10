import { Cross as Hamburger } from 'hamburger-react';
import { lazy, useState } from 'react';

import s from './BurgerMenu.module.css';

const Navigation = lazy(() => import('../Navigation/Navigation'));

const BurgerMenu = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className={s.wrapper}>
                <Hamburger className={s.bur} easing="ease-in" toggled={isOpen} toggle={setOpen} size={20} label="Show menu" direction="right" />
            </div>
            {isOpen && <Navigation onClose={() => setOpen(false)} />}
        </>
    );
};

export default BurgerMenu;
