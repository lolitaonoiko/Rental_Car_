import s from './CarDetailsList.module.css';

const CarDetailsList = ({ list, title }) => {
    return (
        <section>
            <h3 className={s.title}>{title}</h3>
            <ul className={s.list}>
                {list.map(el => (
                    <li key={el.id} className={s.listItem}>
                        <span>
                            <svg width="16" height="16">
                                <use href={`/icons/sprite.svg#${el.icon}`}></use>
                            </svg>
                        </span>
                        <p className={s.property}>{el.property}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CarDetailsList;
