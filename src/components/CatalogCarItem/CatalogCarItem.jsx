import { Link } from 'react-router-dom';

import { lazy, useEffect, useState } from 'react';

import s from './CatalogCarItem.module.css';

const Button = lazy(() => import('../Button/Button'));

const CatalogCarItem = ({ model, brand, type, rentPrice, year, img, rentComp, address, mileage, id }) => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        if (address && typeof address === 'string') {
            const splitedAddress = address.split(',');
            setCity(splitedAddress[1]?.trim() || '');
            setCountry(splitedAddress[2]?.trim() || '');
        }
    }, [address]);
    return (
        <div className={s.carItem}>
            <div>
                <img className={s.img} src={img} alt="Car photo" />
                <button className={s.favBtn}>
                    <svg width="16" height="16">
                        <use href="../../../public/icons/sprite.svg#icon-like-default"></use>
                    </svg>
                </button>
                <div className={s.carTitleBox}>
                    <h4 className={s.title}>
                        {brand} <span className={s.model}>{model}</span>, {year}
                    </h4>
                    <p>${rentPrice}</p>
                </div>

                <dl className={s.descrList}>
                    <dt className={s.descrListItem}>{city}</dt>
                    <dt className={s.descrListItem}>{country}</dt>
                    <dt className={s.descrListItem}>{rentComp}</dt>
                    <dt className={s.descrListItem}>{type}</dt>
                    <dt className={s.descrListItem}>{mileage}</dt>
                </dl>
            </div>
            <Link to={`/catalog/${id}`}>
                <Button text={'Read more'} big />
            </Link>
        </div>
    );
};

export default CatalogCarItem;
