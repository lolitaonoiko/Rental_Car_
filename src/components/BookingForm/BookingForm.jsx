import { lazy, useState } from 'react';
import { BookingFormSchema } from '../../validations/bookingFormSchema';
import s from './BookingForm.module.css';

const Button = lazy(() => import('../Button/Button'));
const Calendar = lazy(() => import('../Calendar/Calendar'));
const FloatingLabelInput = lazy(() => import('../FloatingLabelInput/FloatingLabelInput'));

// const initialValues = {
//     name: '',
//     email: '',
//     date: '',
//     comment: '',
// };

const BookingForm = () => {
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        comment: '',
    });
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDateChange = dayjsDate => {
        const formattedDate = dayjsDate?.format('DD.MM.YY') || '';
        setFormData(prev => ({ ...prev, date: formattedDate }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await BookingFormSchema.validate(formData, { abortEarly: false });
            console.log('Valid data:', formData);
            // Відправка або інша логіка
        } catch (err) {
            if (err.inner) {
                const errors = {};
                err.inner.forEach(error => {
                    errors[error.path] = error.message;
                });
                setFormErrors(errors); // зберігаєш у стейт для показу під інпутами
            }
        }
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.formText}>
                <h3>Book your car now</h3>
                <p>Stay connected! We are always ready to help you.</p>
            </div>
            <div className={s.inpts}>
                <div className={s.floatingWrapper}>
                    <FloatingLabelInput name="name" value={formData.name} onChange={handleChange} placeholder="Name*" error={formErrors.name} />
                </div>

                <div className={s.floatingWrapper}>
                    <FloatingLabelInput name="email" value={formData.email} onChange={handleChange} placeholder="Email*" error={formErrors.email} />
                </div>
                <Calendar value={formData.date} onChange={handleDateChange} error={formErrors.date} />

                <div className={s.floatingWrapper}>
                    <textarea className={s.textarea} name="comment" value={formData.comment} onChange={handleChange} placeholder="Comment" />
                    {formErrors.comment && <span className={s.error}>{formErrors.comment}</span>}
                </div>
            </div>

            <Button text={'Send'} type="submit" />
        </form>
    );
};

export default BookingForm;
