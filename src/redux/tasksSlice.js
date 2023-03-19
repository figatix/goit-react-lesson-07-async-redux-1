import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, fetchTasks, toggleCompleted } from './operations';

// **** SLICE !!!!!

// const tasksInitialState = {
//   items: [
//     // { id: 0, text: 'Learn HTML and CSS', completed: true },
//     // { id: 1, text: 'Get good at JavaScript', completed: true },
//     // { id: 2, text: 'Master React', completed: false },
//     // { id: 3, text: 'Discover Redux', completed: false },
//     // { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   isLoading: false,
//   error: null,
// };

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// export const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: tasksInitialState,
//   extraReducers: {
//     [fetchTasks.pending]: handlePending,
//     [addTask.pending]: handlePending,
//     [deleteTask.pending]: handlePending,
//     [toggleCompleted.pending]: handlePending,

//     [fetchTasks.rejected]: handleRejected,
//     [addTask.rejected]: handleRejected,
//     [deleteTask.rejected]: handleRejected,
//     [toggleCompleted.rejected]: handleRejected,

//     [fetchTasks.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },

//     [addTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       // state.items = [action.payload, ...state.items];
//       state.items.push(action.payload);
//     },

//     [deleteTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;

//       // state.items = state.items.filter(el => el.id !== action.payload);
//       const index = state.items.findIndex(task => task.id === action.payload);
//       state.items.splice(index, 1);
//     },
//     [toggleCompleted.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.items.splice(index, 1, action.payload);
//     },
//   },
// });

// export const tasksReducer = tasksSlice.reducer;

//  ??    [fetchTask.pending]
//  **    [fetchTask.fulfilled]
//  !!    [fetchTask.rejected]

// **** /SLICE !!!!!

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTasks.pending]: handlePending,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected]: handleRejected,
    [addTask.pending]: handlePending,
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addTask.rejected]: handleRejected,
    [deleteTask.pending]: handlePending,
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteTask.rejected]: handleRejected,
    [toggleCompleted.pending]: handlePending,
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [toggleCompleted.rejected]: handleRejected,
  },
});

export const tasksReducer = tasksSlice.reducer;
