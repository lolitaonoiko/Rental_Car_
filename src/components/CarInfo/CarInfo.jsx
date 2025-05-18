import { useSelector } from 'react-redux';
import s from './CarInfo.module.css';
import { selectCarItem } from '../../redux/cars/selectors';

const CarInfo = () => {
    const car = useSelector(selectCarItem);
    return (
        <div className={s.box}>
            <h2>
                {car.brand}, {car.year}
            </h2>
            <p className={s.id}>{car.id}</p>
            <div>
                <span>
                    <svg width="16" height="16">
                        <use href="/public/icons/sprite.svg#icon-location"></use>
                    </svg>
                </span>
                <p className={s.addrs}>{car.address}</p>
            </div>
            <p className={s.price}>${car.rentalPrice}</p>
            <p className={s.desc}>{car.description}</p>
        </div>
    );
};

export default CarInfo;
