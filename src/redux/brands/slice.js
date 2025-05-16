import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    isLoading: false,
    isError: null,
};

const slice = createSlice({
    name: 'brands',
    initialState,
});

export default slice.reducer;
