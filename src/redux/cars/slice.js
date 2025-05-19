import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
const handlePanding = state => {
    state.isLoading = true;
    state.isError = null;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.isError = action.payload;
};

const slice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        addFavCar: (state, action) => {
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload);
            }
        },
    },

    extraReducers: builder => {
        builder
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
            .addCase(getBrands.fulfilled, (state, action) => {
                state.isError = null;
                state.isLoading = false;
                state.brands = action.payload;
            })
            .addCase(getCarById.fulfilled, (state, action) => {
                state.isError = null;
                state.isLoading = false;
                state.carItem = action.payload;
            })
            .addMatcher(isAnyOf(getBrands.pending, getCars.pending, getCarById.pending), handlePanding)
            .addMatcher(isAnyOf(getBrands.rejected, getCars.rejected, getCarById.rejected), handleRejected);
    },
});

export default slice.reducer;

export const { addFavCar } = slice.actions;
