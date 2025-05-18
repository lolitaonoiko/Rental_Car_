import { lazy } from 'react';
import s from './BookingForm.module.css';

const Button = lazy(() => import('../Button/Button'));

const BookingForm = () => {
    return (
        <form className={s.form}>
            <div className={s.formText}>
                <h3>Book your car now</h3>
                <p>Stay connected! We are always ready to help you.</p>
            </div>
            <div className={s.inpts}>
                <input className={s.inpt} placeholder="Name*" />
                <input className={s.inpt} placeholder="Email*" />
                <input className={s.inpt} placeholder="Booking date" />
                <textarea className={s.textarea} placeholder="Comment"></textarea>
            </div>

            <Button text={'Send'} />
        </form>
    );
};

export default BookingForm;
