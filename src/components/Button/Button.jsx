import clsx from 'clsx';

import s from './Button.module.css';

const Button = ({ text, big = false, loadMore = false, onClick, type = 'button' }) => {
    const buildBtnClass = () => {
        return clsx(s.btnSmall, big && s.btnBig, loadMore && s.btnLoadMore);
    };
    return (
        <button type={type} onClick={onClick} className={buildBtnClass()}>
            {text}
        </button>
    );
};

export default Button;
