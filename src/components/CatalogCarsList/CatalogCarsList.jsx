import { lazy } from 'react';
import { useSelector } from 'react-redux';

import { selectCars } from '../../redux/cars/selectors';

import s from './CatalogCarsList.module.css';

const CatalogCarItem = lazy(() => import('../CatalogCarItem/CatalogCarItem'));

const CatalogCarsList = () => {
    const cars = useSelector(selectCars);

    return (
        <>
            <ul className={s.carsList}>
                {cars.map(car => (
                    <li key={car.id}>
                        <CatalogCarItem car={car} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CatalogCarsList;
