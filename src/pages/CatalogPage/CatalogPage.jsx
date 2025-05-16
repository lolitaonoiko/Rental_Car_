import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCarsIsLoading } from '../../redux/cars/selectors';
import { getCars } from '../../redux/cars/operations';

import s from './CatalogPage.module.css';

const FilterBar = lazy(() => import('../../components/FilterBar/FilterBar'));
const CatalogCarsList = lazy(() => import('../../components/CatalogCarsList/CatalogCarsList'));
const Loader = lazy(() => import('../../components/Loader/Loader'));
const Button = lazy(() => import('../../components/Button/Button'));

const CatalogPage = () => {
    // const [searchParams, setSearchParams] = useSearchParams();

    const isLoading = useSelector(selectCarsIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCars());
    }, [dispatch]);

    return isLoading ? (
        <Loader />
    ) : (
        <section className={s.section}>
            <FilterBar />
            <CatalogCarsList />
            <Button text={'Load More'} loadMore />
        </section>
    );
};

export default CatalogPage;
