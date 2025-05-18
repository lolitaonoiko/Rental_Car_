import clsx from 'clsx';
import s from './FilterInput.module.css';

import { NumericFormat } from 'react-number-format';

const FilterInput = ({ typeTo = false, placeholder }) => {
    return <NumericFormat thousandSeparator=" " allowNegative={false} allowLeadingZeros={false} className={clsx(s.typeFrom, typeTo && s.typeTo)} placeholder={placeholder} inputMode="numeric" />;
};

export default FilterInput;
