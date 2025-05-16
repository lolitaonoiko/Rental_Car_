import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const slice = createSlice({
    name: 'favorites',
    initialState,
});

export default slice.reducer;
