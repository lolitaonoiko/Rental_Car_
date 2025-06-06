import { NumericFormat } from 'react-number-format';
import clsx from 'clsx';
import { useId } from 'react';
import useMedia from '../../hooks/useMedia';

import s from './FilterInput.module.css';

const FilterInput = ({ typeTo = false, placeholder, value, onChange }) => {
    const { isMobile } = useMedia();
    const inputId = useId();
    return (
        <div className={s.inptBox}>
            <label id={inputId} className={s.label}>
                {placeholder}
            </label>
            <NumericFormat
                id={inputId}
                value={value}
                onChange={onChange}
                thousandSeparator=","
                allowNegative={false}
                allowLeadingZeros={false}
                className={clsx(s.typeFrom, isMobile && s.mobile, typeTo && s.typeTo)}
                inputMode="numeric"
            />
        </div>
    );
};

export default FilterInput;
