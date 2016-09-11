import * as constants from '../constants';

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SAVE_TASKS:
      return { ...state, list: [...action.tasks] };

    case constants.SAVE_NEW_TASK:
      return { ...state, list: [...state, action.task] };

    case constants.SAVE_UPDATED_TASK:
      return {
        ...state,
        list: state.list.map((task) => (task._id === action.task._id ? action.task : task)),
      };

    case constants.REMOVE_DELETED_TASK:
      return {
        ...state,
        list: state.list.filter((task) => task._id !== action.id),
      };

    default: return state;
  }
};
