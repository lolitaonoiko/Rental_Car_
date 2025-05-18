import { createSlice } from '@reduxjs/toolkit';
import { getBrands, getCarById, getCars } from './operations';

const initialState = {
    cars: [],
    carItem: [],
    brands: [],
    favorites: [],
    filters: {
        brand: '',
        rentalPrice: '',
        minMileage: '',
        maxMileage: '',
    },
    isLoading: false,
    isError: null,
    page: 1,
    totalPages: null,
};

const slice = createSlice({
    name: 'cars',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getCars.pending, state => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(getCars.fulfilled, (state, action) => {
                state.isError = null;
                state.isLoading = false;
                state.totalPages = action.payload.totalPages;
                state.page = Number(action.payload.page);

                if (action.payload.page > 1) {
                    const moreCars = action.payload.cars;
                    state.cars = [...state.cars, ...moreCars];
                } else {
                    state.cars = action.payload.cars;
                }
            })
            .addCase(getCars.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })
            .addCase(getBrands.pending, state => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(getBrands.fulfilled, (state, action) => {
                state.isError = null;
                state.isLoading = false;
                state.brands = action.payload;
            })
            .addCase(getBrands.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })
            .addCase(getCarById.fulfilled, (state, action) => {
                state.isError = null;
                state.isLoading = false;
                state.carItem = action.payload;
            });
    },
});

export default slice.reducer;
