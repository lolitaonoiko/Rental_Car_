import { useSelector } from 'react-redux';
import s from './CarSpecificationsList.module.css';
import { selectCarItem } from '../../redux/cars/selectors';

const CarSpecificationsList = () => {
    const car = useSelector(selectCarItem);
    return (
        <div>
            <h3 className={s.title}>Car Specifications:</h3>
            <ul>
                <li className={s.listItem}>
                    <span>
                        <svg width="16" height="16">
                            <use href="/public/icons/sprite.svg#icon-calendar"></use>
                        </svg>
                    </span>
                    <p>Year: {car.year}</p>
                </li>
                <li className={s.listItem}>
                    <span>
                        <svg width="16" height="16">
                            <use href="/public/icons/sprite.svg#icon-car"></use>
                        </svg>
                    </span>
                    <p>Type: {car.type}</p>
                </li>
                <li className={s.listItem}>
                    <span>
                        <svg width="16" height="16">
                            <use href="/public/icons/sprite.svg#icon-fuel-pump"></use>
                        </svg>
                    </span>
                    <p>Fuel Consumption: {car.fuelConsumption}</p>
                </li>
                <li className={s.listItem}>
                    <span>
                        <svg width="16" height="16">
                            <use href="/public/icons/sprite.svg#icon-gear"></use>
                        </svg>
                    </span>
                    <p>Engine Size: {car.engineSize}</p>
                </li>
            </ul>
        </div>
    );
};

export default CarSpecificationsList;
