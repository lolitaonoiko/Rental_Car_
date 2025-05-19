import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { lazy, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import s from './CatalogCarItem.module.css';
import { addFavCar } from '../../redux/cars/slice';

const Button = lazy(() => import('../Button/Button'));

const CatalogCarItem = ({ car }) => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [isFav, setIsFav] = useState('icon-like-default');

    const dispatch = useDispatch();

    const handleOnClickFavBtn = () => {
        if (isFav === 'icon-like-default') {
            setIsFav('icon-like-active');
        } else {
            setIsFav('icon-like-default');
        }
    };

    const buildFavClass = isFav => {
        return clsx(s.favBtn, isFav === 'icon-like-active' && s.favBtnActv);
    };

    useEffect(() => {
        if (car.address && typeof car.address === 'string') {
            const splitedAddress = car.address.split(',');
            setCity(splitedAddress[1]?.trim() || '');
            setCountry(splitedAddress[2]?.trim() || '');
        }
    }, [car.address]);

    useEffect(() => {
        if (isFav === 'icon-like-active') {
            dispatch(addFavCar(car));
        }
    }, [isFav, car, dispatch]);

    return (
        <div className={s.carItem}>
            <div>
                <img className={s.img} src={car.img} alt="Car photo" />
                <button onClick={handleOnClickFavBtn} className={buildFavClass(isFav)}>
                    <svg width="16" height="16">
                        <use href={`/public/icons/sprite.svg#${isFav}`}></use>
                    </svg>
                </button>
                <div className={s.carTitleBox}>
                    <h4 className={s.title}>
                        {car.brand} <span className={s.model}>{car.model}</span>, {car.year}
                    </h4>
                    <p>${car.rentalPrice}</p>
                </div>

                <dl className={s.descrList}>
                    <dt className={s.descrListItem}>{city}</dt>
                    <dt className={s.descrListItem}>{country}</dt>
                    <dt className={s.descrListItem}>{car.rentalCompany}</dt>
                    <dt className={s.descrListItem}>{car.type}</dt>
                    <dt className={s.descrListItem}>{car.mileage}</dt>
                </dl>
            </div>
            <Link to={`/catalog/${car.id}`}>
                <Button text={'Read more'} big />
            </Link>
        </div>
    );
};

export default CatalogCarItem;
