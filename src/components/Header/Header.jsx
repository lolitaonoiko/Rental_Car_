import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <Logo />
            <Navigation />
        </div>
    );
};

export default Header;
