export const selectCars = state => state.cars.cars;
export const selectCarItem = state => state.cars.carItem;
export const selectCarsIsLoading = state => state.cars.isLoading;
export const selectCarsIsError = state => state.cars.isError;
export const selectCarsPage = state => state.cars.page;
export const selectCarsTotalPages = state => state.cars.totalPages;

export const selectBrands = state => state.cars.brands;
export const selectFavorites = state => state.cars.favorites;

export const selectFilters = state => state.cars.filters;
