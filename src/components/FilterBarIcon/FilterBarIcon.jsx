import s from './FilterBarIcon.module.css';
const FilterBarIcon = ({ open }) => {
    return (
        <div className={s.icon}>
            <svg
                width="16"
                height="16"
                style={{
                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                }}
            >
                <use href="/icons/sprite.svg#icon-down-arrow" />
            </svg>
        </div>
    );
};

export default FilterBarIcon;
