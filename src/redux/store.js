import { configureStore } from '@reduxjs/toolkit';

import carsReducer from './cars/slice';
import brandsReducer from './brands/slice';
import favoritesReducer from './favorites/slice';
import filtersReducer from './filters/slice';

export const store = configureStore({
    reducer: {
        cars: carsReducer,
        brands: brandsReducer,
        favorites: favoritesReducer,
        filters: filtersReducer,
    },
});
