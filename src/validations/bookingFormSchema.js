import dayjs from 'dayjs';
import * as Yup from 'yup';

export const BookingFormSchema = Yup.object().shape({
    name: Yup.string().min(2, 'too short name').max(40, 'Too long name').required('name is required'),
    email: Yup.string()
        .email('email must be in the format: example@domain.com')
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/, 'email must be in the format: example@domain.com')
        .required('email is required')
        .max(50, 'too long'),
    date: Yup.date()
        .nullable()
        .transform((value, originalValue) => (originalValue === '' ? null : value))
        .min(dayjs().startOf('day').toDate(), 'date cannot be in the past'),
    comment: Yup.string().max(500, 'too long comment, maximum number of characters - 400'),
});
