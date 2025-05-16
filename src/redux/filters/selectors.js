export const selectBrandFilter = state => state.filters.brand;
export const selectPriceFilter = state => state.filters.price;
export const selectFromMileageFilter = state => state.filters.fromMileage;
export const selectToMileageFilter = state => state.filters.toMileage;

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
//     }
//   }
// );
