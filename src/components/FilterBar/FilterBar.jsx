import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { lazy } from 'react';

import { selectBrands, selectFilters } from '../../redux/cars/selectors';
import { getCarsThunk } from '../../redux/cars/operations';
import { clearFilters, resetCars, setFilters } from '../../redux/cars/slice';
import { PRICES } from '../../constants/carDetailsConfig';

import s from './FilterBar.module.css';

const DropDown = lazy(() => import('../DropDown/DropDown'));
const Button = lazy(() => import('../Button/Button'));
const FilterInput = lazy(() => import('../FilterInput/FilterInput'));

const FilterBar = () => {
    const brands = useSelector(selectBrands);
    const filters = useSelector(selectFilters);

    const dispatch = useDispatch();

    const handleChange = (field, value) => {
        dispatch(setFilters({ [field]: value }));
    };

    const createChangeHandler = field => e => {
        handleChange(field, e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!filters.brand && !filters.rentalPrice && !filters.minMileage && !filters.maxMileage) {
            toast.error('Please enter your search queries');
            return;
        }
        const cleanMinMileage = filters.minMileage ? filters.minMileage.replace(/,/g, '') : '';
        const cleanMaxMileage = filters.maxMileage ? filters.maxMileage.replace(/,/g, '') : '';

        const preparedFilters = {
            brand: filters.brand,
            rentalPrice: filters.rentalPrice,
            minMileage: cleanMinMileage,
            maxMileage: cleanMaxMileage,
        };
        dispatch(getCarsThunk({ filters: preparedFilters }));

        dispatch(resetCars());
    };

    const handleOnClickClear = () => {
        dispatch(clearFilters());

        dispatch(getCarsThunk({}));
    };

    return (
        <>
            <form className={s.form} onSubmit={handleSubmit}>
                <span className={s.dropSpan}>
                    <DropDown descr={'Car brand'} items={brands} text={'Choose a brand'} value={filters.brand} onChange={createChangeHandler('brand')} />
                    <DropDown descr={'Price/ 1 hour'} items={PRICES} text={'Choose a price'} value={filters.rentalPrice} onChange={createChangeHandler('rentalPrice')} />
                </span>

                <div className={s.inptBox}>
                    <p className={s.mileageText}>Car mileage / km</p>
                    <span className={s.inptSpan}>
                        <FilterInput type={'number'} placeholder={'From'} value={filters.minMileage} onChange={createChangeHandler('minMileage')} />

                        <FilterInput type={'number'} placeholder={'To'} typeTo value={filters.maxMileage} onChange={createChangeHandler('maxMileage')} />
                    </span>
                    <span className={s.btnSpan}>
                        <Button text={'Search'} type={'submit'} fltrBtn />
                        <Button text={'Clear'} outlined onClick={handleOnClickClear} fltrBtn />
                    </span>
                </div>
            </form>
        </>
    );
};

export default FilterBar;
