export const selectCars = state => state.cars.cars;
export const selectCarItem = state => state.cars.carItem;
export const selectCarsIsLoading = state => state.cars.isLoading;
export const selectCarsIsError = state => state.cars.isError;
export const selectCarsPage = state => state.cars.page;
export const selectCarsTotalPages = state => state.cars.totalPages;

export const selectBrands = state => state.cars.brands;
export const selectFavorites = state => state.cars.favorites;

export const selectBrandFilter = state => state.cars.filters.brand;
export const selectPriceFilter = state => state.cars.filters.price;
export const selectFromMileageFilter = state => state.cars.filters.minMileage;
export const selectToMileageFilter = state => state.cars.filters.maxMileage;

// createSelector;
// src/redux/tasksSlice.js

// import { createSelector } from "@reduxjs/toolkit";

// // Решта селекторів

// export const selectVisibleTasks = createSelector(
//  [selectTasks, selectStatusFilter],
// (tasks, statusFilter) => {
//  console.log("Calculating visible tasks. Now memoized!");

// switch (statusFilter) {
//  case "active":
//  return tasks.filter(task => !task.completed);
//  case "completed":
// return tasks.filter(task => task.completed);
//  default:
//  return tasks;
