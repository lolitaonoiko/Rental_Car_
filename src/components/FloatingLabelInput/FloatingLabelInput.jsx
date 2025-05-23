// FloatingLabelInput.jsx
import s from './FloatingLabelInput.module.css';

const FloatingLabelInput = ({ name, value, onChange, placeholder, error }) => {
    return (
        <div className={s.inputWrapper}>
            <input name={name} value={value} onChange={onChange} placeholder=" " className={`${s.input} ${error ? s.errorInput : ''}`} />
            <label className={s.label}>{placeholder}</label>
            {error && <span className={s.error}>{error}</span>}
        </div>
    );
};

export default FloatingLabelInput;
