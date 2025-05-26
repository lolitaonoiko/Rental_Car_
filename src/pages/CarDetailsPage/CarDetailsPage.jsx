import { lazy, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useParams } from 'react-router-dom';

import { getCarByIdThunk } from '../../redux/cars/operations';
import { selectCarItem } from '../../redux/cars/selectors';
import { normalizeList } from '../../utils/normalizeList';
import { SPECIFICATIONS_LIST, RENTAL_COND_LIST } from '../../constants/carDetailsConfig';

import s from './CarDetailsPage.module.css';

const CarImage = lazy(() => import('../../components/CarImage/CarImage'));
const BookingForm = lazy(() => import('../../components/BookingForm/BookingForm'));
const CarInfo = lazy(() => import('../../components/CarInfo/CarInfo'));
const CarDetailsList = lazy(() => import('../../components/CarDetailsList/CarDetailsList'));
const Button = lazy(() => import('../../components/Button/Button'));

const CarDetailsPage = () => {
    const car = useSelector(selectCarItem);
    const location = useLocation();
    const goBackLink = useRef(location.state ?? '/catalog');

    const { id } = useParams();
    const dispatch = useDispatch();

    const accessories = Array.isArray(car?.accessories) ? car.accessories : [];
    const functionalities = Array.isArray(car?.functionalities) ? car.functionalities : [];

    const fullListAccss = normalizeList([...accessories, ...functionalities]);
    const rentalList = normalizeList(RENTAL_COND_LIST);

    const specificationsList = normalizeList(SPECIFICATIONS_LIST, {
        sourceObject: car,
        isConfig: true,
    });

    useEffect(() => {
        dispatch(getCarByIdThunk(id));
    }, [id, dispatch]);

    return (
        <section className={s.section}>
            <aside>
                <CarImage src={car.img} alt={'Large car photo'} size="large" />
                <BookingForm />
                <NavLink to={goBackLink.current} className={s.backLink}>
                    <Button text={'Back to Catalog'} outlined />
                </NavLink>
            </aside>
            <section className={s.descrSection}>
                <CarInfo />
                <div className={s.descr}>
                    <CarDetailsList title={'Accessories and functionalities:'} list={fullListAccss} />
                    <CarDetailsList title={'Rental Conditions:'} list={rentalList} />
                    <CarDetailsList title={'Car Specifications:'} list={specificationsList} />
                </div>
            </section>
        </section>
    );
};

export default CarDetailsPage;
