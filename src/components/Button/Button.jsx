import clsx from 'clsx';

import useMedia from '../../hooks/useMedia';
import s from './Button.module.css';

const Button = ({ text, big = false, outlined = false, onClick, type = 'button', fltrBtn = false, detlsBtn = false }) => {
    const { isMobile } = useMedia();

    const buildBtnClass = () => {
        return clsx(s.btnSmall, fltrBtn && s.btnMob, big && s.btnBig, outlined && s.btnLoadMore);
    };

    const renderContent = () => {
        if (isMobile) {
            if (fltrBtn) {
                return (
                    <svg width="14" height="14">
                        <use href={`/icons/sprite.svg#icon-${text}`}></use>
                    </svg>
                );
            }
            if (detlsBtn) {
                return (
                    <svg width="16" height="16">
                        <use href={'/icons/sprite.svg#icon-back-arrow'}></use>
                    </svg>
                );
            }
        }
        return text;
    };
    return (
        <button type={type} onClick={onClick} className={buildBtnClass()}>
            {renderContent()}
        </button>
    );
};

export default Button;
