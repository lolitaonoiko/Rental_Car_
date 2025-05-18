import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCarById } from '../../redux/cars/operations';

import s from './CarDetailsPage.module.css';

const CarImage = lazy(() => import('../../components/CarImage/CarImage'));
const AccessoriesList = lazy(() => import('../../components/AccessoriesList/AccessoriesList'));
const BookingForm = lazy(() => import('../../components/BookingForm/BookingForm'));
const CarInfo = lazy(() => import('../../components/CarInfo/CarInfo'));
const CarSpecificationsList = lazy(() => import('../../components/CarSpecificationsList/CarSpecificationsList'));
const RentalConditionsList = lazy(() => import('../../components/RentalConditionsList/RentalConditionsList'));

const CarDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarById(id));
    });

    return (
        <section className={s.section}>
            <aside>
                <CarImage />
                <BookingForm />
            </aside>
            <div>
                <CarInfo />
                <div className={s.descr}>
                    <RentalConditionsList />
                    <CarSpecificationsList />
                    <AccessoriesList />
                </div>
            </div>
        </section>
    );
};

export default CarDetailsPage;
