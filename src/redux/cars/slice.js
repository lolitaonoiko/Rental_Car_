import { createSlice } from '@reduxjs/toolkit';
import { getCars } from './operations';

const initialState = {
    items: [],
    isLoading: false,
    isError: null,
    page: 1,
    totalItems: 0,
};

const slice = createSlice({
    name: 'cars',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getCars.pending, state => {
                state.isLoading = true;
            })
            .addCase(getCars.fulfilled, (state, action) => {
                state.isError = null;
                state.isLoading = false;
                state.items = action.payload.cars;
                state.page = action.payload.page;
                state.totalItems = action.payload.totalPages;
            })
            .addCase(getCars.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            });
    },
});

export default slice.reducer;
