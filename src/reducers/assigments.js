import * as constants from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SAVE_ASSIGMENTS:
      console.log(action);
      return [...action.assigments];

    default:
      return state;
  }
};
