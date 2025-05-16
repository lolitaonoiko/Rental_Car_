import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    brand: '',
    price: '',
    fromMileage: '',
    toMileage: '',
};

const slice = createSlice({
    name: 'filters',
    initialState,
});

export default slice.reducer;
