import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

// *** Атомарні селектори

export const selectTasks = state => state.tasks.items;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;

export const selectStatusFilter = state => state.filters.status;

// ??? Складові селектори

// export const selectVisibleTasks = state => {
//   const tasks = selectTasks(state);
//   const statusFilter = selectStatusFilter(state);

//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };

// export const selectTaskCount = state => {
//   const tasks = selectTasks(state);

//   console.log('Yoi', Date.now());

//   return tasks.reduce(
//     (acc, el) => {
//       if (el.completed) {
//         acc.completed += 1;
//       } else {
//         acc.active += 1;
//       }
//       return acc;
//     },
//     { active: 0, completed: 0 }
//   );
// };

//  ***  Мемоізуємо Селектори

export const selectTaskCount = createSelector([selectTasks], tasks => {
  return tasks.reduce(
    (acc, el) => {
      if (el.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
});

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);
