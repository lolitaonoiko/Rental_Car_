import * as Yup from 'yup';

export const BookingFormSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too short name').max(30, 'Too long name').required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    date: Yup.string(),
    comment: Yup.string().max(400, 'Too long comment'),
});
