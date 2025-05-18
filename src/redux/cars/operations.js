import { createAsyncThunk } from '@reduxjs/toolkit';
import { carRentalApi } from '../../api/carRentalApi';

export const getCars = createAsyncThunk('cars/getAll', async ({ page = 1, filters = {} }, thunkAPI) => {
    try {
        const { data } = await carRentalApi.get('/cars', {
            params: {
                brand: filters.brand || null,
                rentalPrice: filters.rentalPrice || null,
                minMileage: filters.minMileage || null,
                maxMileage: filters.maxMileage || null,
                limit: 12,
                page,
            },
        });

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const getCarById = createAsyncThunk('cars/getCarById', async (id, thunkAPI) => {
    try {
        const { data } = await carRentalApi.get(`/cars/${id}`);

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const getBrands = createAsyncThunk('brands/getAllBrands', async (_, thunkAPI) => {
    try {
        const { data } = await carRentalApi.get('/brands');

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
