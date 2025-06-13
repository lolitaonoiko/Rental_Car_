import clsx from 'clsx';

import useMedia from '../../hooks/useMedia';
import s from './Button.module.css';

const Button = ({ text, big = false, outlined = false, onClick, type = 'button', fltrBtn = false }) => {
    const { isMobile } = useMedia();

    const buildBtnClass = () => {
        return clsx(s.btnSmall, fltrBtn && s.btnMob, big && s.btnBig, outlined && s.btnLoadMore);
    };
    return (
        <button type={type} onClick={onClick} className={buildBtnClass()}>
            {fltrBtn && isMobile ? (
                <svg width="14" height="14">
                    <use href={`public/icons/sprite.svg#icon-${text}`}></use>
                </svg>
            ) : (
                text
            )}
        </button>
    );
};

export default Button;
