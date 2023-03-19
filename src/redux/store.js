import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

// **** before Slice

// import { configureStore } from '@reduxjs/toolkit';
// import { filtersReducer, tasksReducer } from './reducer';

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     filters: filtersReducer,
//   },
// });

// **** /before Slice

// ****

// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore } from 'redux';

// import { rootReducer } from './reducer';

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

// **** /
