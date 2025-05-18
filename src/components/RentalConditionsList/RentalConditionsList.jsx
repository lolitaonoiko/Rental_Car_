import s from './RentalConditionsList.module.css';

const RentalConditionsList = () => {
    return (
        <div>
            <h3 className={s.title}>Rental Conditions:</h3>
            <ul className={s.list}>
                <li className={s.listItem}>
                    <span>
                        <svg width="16" height="16">
                            <use href="/public/icons/sprite.svg#icon-check-circle"></use>
                        </svg>
                    </span>
                    <p>Minimum age: 25</p>
                </li>
                <li className={s.listItem}>
                    <span>
                        <svg width="16" height="16">
                            <use href="/public/icons/sprite.svg#icon-check-circle"></use>
                        </svg>
                    </span>
                    <p>Security deposite required </p>
                </li>
                <li className={s.listItem}>
                    <span>
                        <svg width="16" height="16">
                            <use href="/public/icons/sprite.svg#icon-check-circle"></use>
                        </svg>
                    </span>
                    <p>Valid driver`s license</p>
                </li>
            </ul>
        </div>
    );
};

export default RentalConditionsList;
