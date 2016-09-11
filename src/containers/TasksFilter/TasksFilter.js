import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { setTasksFilter } from '../../actions';

const FILTERS = [
  { text: 'All Tasks', value: 0 },
  { text: 'Common Tasks', value: 1 },
  { text: 'My Tasks', value: 2 },
  { text: 'Assigned to me tasks', value: 3 },
];

const TasksFilter = (props) => {
  const printFilter = (filter, index) => {
    const className = `item ${filter.value === props.filter ? 'active' : ''}`;
    const action = () => {
      props.dispatch(setTasksFilter(filter.value));
    };

    return (
      <a key={index} className={className} onClick={action}>
        {filter.text}
      </a>
    );
  };

  return (
    <div className="top-filter">
      <div className="ui tiny compact menu">
        {FILTERS.map(printFilter)}
      </div>
    </div>
  );
};

TasksFilter.propTypes = {
  filter: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateTpProps = (state) => ({
  filter: state.tasks.filter,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateTpProps, mapDispatchToProps)(TasksFilter);

