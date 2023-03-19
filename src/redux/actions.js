// import { nanoid } from 'nanoid';

// ****** Before Slice

// import { createAction, nanoid } from '@reduxjs/toolkit';

// export const addTask = createAction('tasks/addTask', text => {
//   return {
//     payload: {
//       id: nanoid(),
//       text,
//       completed: false,
//     },
//   };
// });

// export const deleteTask = createAction('tasks/deleteTask');

// export const toggleCompleted = createAction('tasks/toggleCompleted');

// export const setStatusFilter = createAction('filter/setStatusFilter');

// ****** /Before Slice

// export const addTask = text => {
//   return {
//     type: 'tasks/addTask',
//     payload: {
//       id: nanoid(),
//       text,
//       completed: false,
//     },
//   };
// };

// export const deleteTask = taskId => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: taskId,
//   };
// };

// export const toggleCompleted = taskId => {
//   return {
//     type: 'tasks/toggleCompleted',
//     payload: taskId,
//   };
// };

// export const setStatusFilter = status => {
//   return {
//     type: 'filter/setStatusFilter',
//     payload: status,
//   };
// };
