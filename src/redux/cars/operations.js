import { createAsyncThunk } from '@reduxjs/toolkit';
import { carRentalApi } from '../../api/carRentalApi';

export const getCars = createAsyncThunk('cars/getAll', async (_, thunkAPI) => {
    try {
        const { data } = await carRentalApi.get('/cars');

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
