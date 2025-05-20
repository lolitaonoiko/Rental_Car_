import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getCarById } from '../../redux/cars/operations';
import { selectCarItem } from '../../redux/cars/selectors';
import { normalizeList } from '../../utils/normalizeList';
import { SPECIFICATIONS_LIST, RENTAL_COND_LIST } from '../../constants/carDetailsConfig';

import s from './CarDetailsPage.module.css';

const CarImage = lazy(() => import('../../components/CarImage/CarImage'));
const BookingForm = lazy(() => import('../../components/BookingForm/BookingForm'));
const CarInfo = lazy(() => import('../../components/CarInfo/CarInfo'));
const CarDetailsList = lazy(() => import('../../components/CarDetailsList/CarDetailsList'));

const CarDetailsPage = () => {
    const car = useSelector(selectCarItem);

    const accessories = Array.isArray(car?.accessories) ? car.accessories : [];
    const functionalities = Array.isArray(car?.functionalities) ? car.functionalities : [];

    const fullListAccss = normalizeList([...accessories, ...functionalities]);
    const rentalList = normalizeList(RENTAL_COND_LIST);

    const specificationsList = normalizeList(SPECIFICATIONS_LIST, {
        sourceObject: car,
        isConfig: true,
    });

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarById(id));
    });

    return (
        <section className={s.section}>
            <aside>
                <CarImage src={car.img} alt={'Large car photo'} size="large" />
                <BookingForm />
            </aside>
            <div>
                <CarInfo />
                <div className={s.descr}>
                    <CarDetailsList title={'Accessories and functionalities:'} list={fullListAccss} />
                    <CarDetailsList title={'Rental Conditions:'} list={rentalList} />
                    <CarDetailsList title={'Car Specifications:'} list={specificationsList} />
                </div>
            </div>
        </section>
    );
};

export default CarDetailsPage;
