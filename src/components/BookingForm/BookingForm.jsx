import { toast } from 'react-toastify';
import { lazy, useId, useState } from 'react';

import { BookingFormSchema } from '../../validations/bookingFormSchema';

import s from './BookingForm.module.css';

const Button = lazy(() => import('../Button/Button'));
const Calendar = lazy(() => import('../Calendar/Calendar'));
const FloatingLabelInput = lazy(() => import('../FloatingLabelInput/FloatingLabelInput'));

const BookingForm = () => {
    const textareaId = useId();
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
        const jsDate = dayjsDate?.isValid() ? dayjsDate.toDate() : null;
        setFormData(prev => ({ ...prev, date: jsDate }));
        setFormErrors(prev => ({ ...prev, date: '' }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await BookingFormSchema.validate(formData, { abortEarly: false });

            toast.success('Successfully sent info');
            setFormData({ name: '', email: '', date: null, comment: '' });
            setFormErrors({});
        } catch (err) {
            if (err.inner) {
                const errors = {};
                err.inner.forEach(error => {
                    errors[error.path] = error.message;
                });
                setFormErrors(errors);
            }
        }
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.formText}>
                <h3>Book your car now</h3>
                <p className={s.descr}>Stay connected! We are always ready to help you.</p>
            </div>
            <div className={s.inptsBox}>
                <FloatingLabelInput name="name" value={formData.name} onChange={handleChange} placeholder="Name*" error={formErrors.name} />

                <FloatingLabelInput name="email" value={formData.email} onChange={handleChange} placeholder="Email*" error={formErrors.email} />

                <Calendar value={formData.date} onChange={handleDateChange} error={formErrors.date} />

                <div className={s.textareaWrapper}>
                    <textarea id={textareaId} className={s.textarea} name="comment" value={formData.comment} onChange={handleChange} placeholder=" " />
                    <label id={textareaId} className={s.label}>
                        Comment
                    </label>
                    {formErrors.comment && <span className={s.error}>{formErrors.comment}</span>}
                </div>
            </div>
            <span className={s.btnSpan}>
                <Button text={'Send'} type="submit" />
            </span>
        </form>
    );
};

export default BookingForm;
