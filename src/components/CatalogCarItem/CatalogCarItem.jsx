import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { lazy, useEffect, useState } from 'react';

import { addFavCar, deleteFavCar } from '../../redux/cars/slice';
import s from './CatalogCarItem.module.css';
import { selectFavorites } from '../../redux/cars/selectors';

const Button = lazy(() => import('../Button/Button'));
const CarImage = lazy(() => import('../CarImage/CarImage'));

const CatalogCarItem = ({ car }) => {
    const favorites = useSelector(selectFavorites);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const [isFav, setIsFav] = useState('icon-like-default');

    const dispatch = useDispatch();

    const buildFavClass = isFav => {
        return clsx(s.favBtn, isFav === 'icon-like-active' && s.favBtnActv);
    };

    const handleOnClickFavBtn = () => {
        if (isFav === 'icon-like-default') {
            dispatch(addFavCar(car));
            setIsFav('icon-like-active');
        } else {
            dispatch(deleteFavCar(car));
            setIsFav('icon-like-default');
        }
    };

    useEffect(() => {
        const isAlreadyFav = favorites.some(item => item.id === car.id);
        setIsFav(isAlreadyFav ? 'icon-like-active' : 'icon-like-default');
    }, [car, favorites]);

    useEffect(() => {
        if (car.address && typeof car.address === 'string') {
            const splitedAddress = car.address.split(',');
            setCity(splitedAddress[1]?.trim() || '');
            setCountry(splitedAddress[2]?.trim() || '');
        }
    }, [car.address]);

    return (
        <section className={s.carItem}>
            <div>
                <CarImage src={car.img} alt={'Small car photo'} />
                <button onClick={handleOnClickFavBtn} className={buildFavClass(isFav)}>
                    <svg width="16" height="16">
                        <use href={`/icons/sprite.svg#${isFav}`}></use>
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
        </section>
    );
};

export default CatalogCarItem;
