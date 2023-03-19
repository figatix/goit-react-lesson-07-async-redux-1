import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.items = [...action.payload, ...state.items]; //? ***
      // state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingError, fetchingInProgress, fetchingSuccess } =
  tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;

// ******************

// import { createSlice } from "@reduxjs/toolkit";

// const tasksInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: tasksInitialState,
//   reducers: {
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } = tasksSlice.actions;
// export const tasksReducer = tasksSlice.reducer;
