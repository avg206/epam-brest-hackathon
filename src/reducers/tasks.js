import * as constants from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SAVE_TASKS:
      return [...action.tasks];

    case constants.SAVE_NEW_TASK:
      return [...state, action.task];

    default:
      return state;
  }
};
