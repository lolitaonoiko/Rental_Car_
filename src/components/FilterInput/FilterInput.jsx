import { NumericFormat } from 'react-number-format';
import clsx from 'clsx';

import s from './FilterInput.module.css';

const FilterInput = ({ typeTo = false, placeholder }) => {
    return (
        <div className={s.inptBox}>
            <label className={s.label}>{placeholder}</label>
            <NumericFormat thousandSeparator="," allowNegative={false} allowLeadingZeros={false} className={clsx(s.typeFrom, typeTo && s.typeTo)} inputMode="numeric" />
        </div>
    );
};

export default FilterInput;
