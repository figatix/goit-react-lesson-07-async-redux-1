import axios from 'axios';
import {
  fetchingError,
  fetchingInProgress,
  fetchingSuccess,
} from './tasksSlice';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const fetchTasks = () => {
  return async dispatch => {
    dispatch(fetchingInProgress());
    try {
      // ????
      const response = await axios.get('/tasks');
      dispatch(fetchingSuccess(response.data));
    } catch (err) {
      dispatch(fetchingError(err.message));
    }
  };
};

// **************

// import axios from "axios";
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from "./tasksSlice";

// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// export const fetchTasks = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get("/tasks");
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };
