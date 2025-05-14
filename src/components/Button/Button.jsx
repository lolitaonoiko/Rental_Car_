import clsx from 'clsx';

import s from './Button.module.css';

const Button = ({ text, big = false, loadMore = false }) => {
    const buildBtnClass = () => {
        return clsx(s.btnSmall, big && s.btnBig, loadMore && s.btnLoadMore);
    };
    return <button className={buildBtnClass()}>{text}</button>;
};

export default Button;
