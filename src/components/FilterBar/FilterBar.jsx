import { useDispatch, useSelector } from 'react-redux';
import s from './FilterBar.module.css';
import { toast } from 'react-toastify';

import { lazy } from 'react';
import { selectBrands } from '../../redux/cars/selectors';
import { getCars } from '../../redux/cars/operations';

const DropDown = lazy(() => import('../DropDown/DropDown'));
const Button = lazy(() => import('../Button/Button'));
const FilterInput = lazy(() => import('../FilterInput/FilterInput'));

const FilterBar = () => {
    const brands = useSelector(selectBrands);

    const prices = [30, 40, 50, 60, 70, 80];
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const brandValue = e.target.elements[0].value;
        const priceValue = e.target.elements[1].value;
        const inputFrom = e.target.elements[2].value.replace(/\s/g, '');
        const inputTo = e.target.elements[3].value.replace(/\s/g, '');

        if ((brandValue === '') & (priceValue === '') & (inputFrom === '') & (inputTo === '')) {
            toast.error('Please enter your search queries');
        }

        const filters = {
            brand: brandValue,
            rentalPrice: priceValue,
            minMileage: inputFrom,
            maxMileage: inputTo,
        };

        dispatch(getCars({ filters }));
    };

    return (
        <>
            <form className={s.form} onSubmit={handleSubmit}>
                <DropDown items={brands} text={'Choose a brand'} />
                <DropDown items={prices} text={'Choose a price'} />

                <div>
                    <p className={s.mileageText}>Car mileage / km</p>
                    <FilterInput type={'number'} placeholder={'From'} />

                    <FilterInput type={'number'} placeholder={'To'} typeTo />
                </div>

                <Button text={'Search'} type={'submit'} />
            </form>
        </>
    );
};

export default FilterBar;
