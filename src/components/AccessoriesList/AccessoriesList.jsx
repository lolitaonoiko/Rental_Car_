import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import s from './AccessoriesList.module.css';
import { selectCarItem } from '../../redux/cars/selectors';

const AccessoriesList = () => {
    const car = useSelector(selectCarItem);

    const accessories = Array.isArray(car?.accessories) ? car.accessories : [];
    const functionalities = Array.isArray(car?.functionalities) ? car.functionalities : [];

    const fullList = [...accessories, ...functionalities].map(item => ({
        id: nanoid(),
        name: item,
    }));

    return (
        <div>
            <h3 className={s.title}>Accessories and functionalities:</h3>
            <ul className={s.list}>
                {fullList.map(el => (
                    <li key={el.id} className={s.listItem}>
                        <span>
                            <svg width="16" height="16">
                                <use href="/public/icons/sprite.svg#icon-check-circle"></use>
                            </svg>
                        </span>
                        <p>{el.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AccessoriesList;
