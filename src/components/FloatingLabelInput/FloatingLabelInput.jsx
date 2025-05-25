import { useId } from 'react';

import s from './FloatingLabelInput.module.css';

const FloatingLabelInput = ({ name, value, onChange, placeholder, error }) => {
    const inputId = useId();
    return (
        <div className={s.inputWrapper}>
            <input id={inputId} name={name} value={value} onChange={onChange} placeholder=" " className={s.input} />
            <label id={inputId} className={s.label}>
                {placeholder}
            </label>
            {error && <span className={s.error}>{error}</span>}
        </div>
    );
};

export default FloatingLabelInput;
