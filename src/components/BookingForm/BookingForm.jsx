import { Field, Form, Formik } from 'formik';
import { lazy, useId } from 'react';
import s from './BookingForm.module.css';

const Button = lazy(() => import('../Button/Button'));
const Calendar = lazy(() => import('../Calendar/Calendar'));

const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
};

const BookingForm = () => {
    const nameFieldId = useId();
    const emailFieldId = useId();
    // const dateFieldId = useId();
    const commentFieldId = useId();

    const handleSubmit = values => {
        console.log(values);
    };
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={s.form}>
                <div className={s.formText}>
                    <h3>Book your car now</h3>
                    <p>Stay connected! We are always ready to help you.</p>
                </div>
                <div className={s.inpts}>
                    {/* <label htmlFor={nameFieldId}></label> */}
                    <Field className={s.inpt} placeholder="Name*" name="name" id={nameFieldId} />

                    {/* <label htmlFor={emailFieldId}></label> */}
                    <Field className={s.inpt} placeholder="Email*" name="email" id={emailFieldId} />

                    {/* <label></label> */}
                    {/* <Field className={s.inpt} placeholder="Booking date" name="date" id={dateFieldId} /> */}
                    <Calendar />

                    {/* <label htmlFor={commentFieldId}></label> */}
                    <Field as="textarea" className={s.textarea} placeholder="Comment" name="comment" id={commentFieldId}></Field>
                </div>

                <Button text={'Send'} type="submit" />
            </Form>
        </Formik>
    );
};

export default BookingForm;
