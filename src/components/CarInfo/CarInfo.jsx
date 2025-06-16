import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { selectCarItem } from '../../redux/cars/selectors';

import s from './CarInfo.module.css';

const CarInfo = () => {
    const car = useSelector(selectCarItem);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        if (car.address && typeof car.address === 'string') {
            const splitedAddress = car.address.split(',');
            setCity(splitedAddress[1]?.trim() || '');
            setCountry(splitedAddress[2]?.trim() || '');
        }
    }, [car.address]);

    return (
        <div className={s.box}>
            <h2 className={s.title}>
                {car.brand} {car.model}, {car.year}
            </h2>
            <details className={s.id}>
                <summary>details:</summary>
                <p>id:{car.id}</p>
            </details>
            <div className={s.addressList}>
                <p className={s.addrs}>
                    {city}, {country}
                </p>
                <p className={s.mileage}>Mileage: {car.mileage} km</p>
                <span className={s.icon}>
                    <svg width="16" height="16">
                        <use href="/public/icons/sprite.svg#icon-location"></use>
                    </svg>
                </span>
            </div>
            <p className={s.price}>${car.rentalPrice}</p>
            <p className={s.desc}>{car.description}</p>
        </div>
    );
};

export default CarInfo;
