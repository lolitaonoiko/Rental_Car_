import * as Yup from 'yup';

const BookingFormSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too short name').max(30, 'Too long name').required('Required'),
    email: Yup.string().email().required(),
});
