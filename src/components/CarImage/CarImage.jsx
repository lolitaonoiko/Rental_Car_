import { useSelector } from 'react-redux';
import { selectCarItem } from '../../redux/cars/selectors';

import s from './CarImage.module.css';

const CarImage = () => {
    const car = useSelector(selectCarItem);
    return (
        <>
            <img src={car.img} alt="Car Photo" className={s.img} />
        </>
    );
};

export default CarImage;
