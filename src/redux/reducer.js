// import { statusFilters } from './constants';
// import { createReducer } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
// import {
//   addTask,
//   deleteTask,
//   toggleCompleted,
//   setStatusFilter,
// } from './actions';

// **** SLICE !!!!!

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// export const taskSlice = createSlice({
//   name: 'tasks',
//   initialState: tasksInitialState,
//   reducers: {
//     addTask: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             id: nanoid(),
//             text,
//             completed: false,
//           },
//         };
//       },
//     },
//     deleteTask(state, action) {
//       const idx = state.findIndex(el => el.id === action.payload);
//       state.splice(idx, 1);
//     },
//     toggleCompleted(state, action) {
//       for (const task of state) {
//         if (task.id === action.payload) {
//           task.completed = !task.completed;
//         }
//       }
//     },
//   },
// });

// export const { addTask, deleteTask, toggleCompleted } = taskSlice.actions;
// export const tasksReducer = taskSlice.reducer;
// **** /SLICE !!!!!

// ************** IMMER ***************

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteTask]: (state, action) => {
//     const idx = state.findIndex(el => el.id === action.payload);
//     state.splice(idx, 1);
//   },
//   [toggleCompleted]: (state, action) => {
//     for (const task of state) {
//       if (task.id === action.payload) {
//         task.completed = !task.completed;
//       }
//     }
//   },
// });

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     state.status = action.payload;
//   },
// });

// ************** /IMMER ***************

// ******************* IMMUTABLE
// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     return [...state, action.payload];
//   },
//   [deleteTask]: (state, action) => {
//     return state.filter(el => el.id !== action.payload);
//   },
//   [toggleCompleted]: (state, action) => {
//     return state.map(el => {
//       if (el.id !== action.payload) {
//         return el;
//       }
//       return {
//         ...el,
//         completed: !el.completed,
//       };
//     });
//   },
// });

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     return {
//       ...state,
//       status: action.payload,
//     };
//   },
// });

// ******************* / IMMUTABLE

// ------------------------
// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];

//     case deleteTask.type:
//       return state.filter(el => el.id !== action.payload);

//     case toggleCompleted.type:
//       return state.map(el => {
//         if (el.id !== action.payload) {
//           return el;
//         }
//         return {
//           ...el,
//           completed: !el.completed,
//         };
//       });

//     default:
//       return state;
//   }
// };
// -------------------------------

// --------------------
// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case setStatusFilter.type:
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };
// ---------------------------

// ==================================

// import { statusFilters } from './constants';
// import { combineReducers } from 'redux';

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case 'tasks/addTask':
//       return [...state, action.payload];

//     case 'tasks/deleteTask':
//       return state.filter(el => el.id !== action.payload);

//     case 'tasks/toggleCompleted':
//       return state.map(el => {
//         if (el.id !== action.payload) {
//           return el;
//         }
//         return {
//           ...el,
//           completed: !el.completed,
//         };
//       });

//     default:
//       return state;
//   }
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filter/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });
