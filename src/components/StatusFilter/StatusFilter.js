import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { getStatusFilter } from 'redux/selectors';

import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);

  const dispatch = useDispatch();
  // const currFn = e => {
  //   const val = e.target.name;
  //   dispatch(setStatusFilter(val));
  // };

  const handleFilterChange = filter => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <div className={css.wrapper}>
      <Button
        // onClick={currFn}
        // name="all"
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        // onClick={currFn}
        // name="active"
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        // onClick={currFn}
        // name="completed"
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
