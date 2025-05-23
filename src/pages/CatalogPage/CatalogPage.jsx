import { lazy, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectBrands, selectCars, selectCarsIsLoading, selectCarsPage, selectCarsTotalPages } from '../../redux/cars/selectors';
import { getBrandsThunk, getCarsThunk } from '../../redux/cars/operations';

import s from './CatalogPage.module.css';

const FilterBar = lazy(() => import('../../components/FilterBar/FilterBar'));
const CatalogCarsList = lazy(() => import('../../components/CatalogCarsList/CatalogCarsList'));
const Loader = lazy(() => import('../../components/Loader/Loader'));
const Button = lazy(() => import('../../components/Button/Button'));

const CatalogPage = () => {
    const isLoading = useSelector(selectCarsIsLoading);
    const brands = useSelector(selectBrands);
    const cars = useSelector(selectCars);
    const page = useSelector(selectCarsPage);
    const totalPages = useSelector(selectCarsTotalPages);
    const dispatch = useDispatch();
    const hasBrands = useRef(false);

    useEffect(() => {
        if (!hasBrands.current && !brands.length) {
            dispatch(getBrandsThunk());
            hasBrands.current = true;
        }
    }, [dispatch, brands]);

    useEffect(() => {
        if (cars.length === 0 && totalPages === null) {
            dispatch(getCarsThunk({ page: 1 }));
        }
    }, [dispatch, page, cars.length, totalPages]);

    const handleOnCLickBtn = e => {
        e.preventDefault();
        if (page < totalPages) {
            dispatch(getCarsThunk({ page: page + 1 }));
        }
    };

    return (
        <section className={s.section}>
            <FilterBar />
            {totalPages !== 0 && <CatalogCarsList />}
            {page < totalPages && !isLoading && <Button text="Load More" loadMore onClick={handleOnCLickBtn} />}
            {isLoading && <Loader />}
            {totalPages === 0 && <p>No cars were found for the selected parameters.</p>}
        </section>
    );
};

export default CatalogPage;
