import * as constants from '../constants';
import defaultAssigments from '../../config/assigne.json';
const initialState = defaultAssigments;

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SAVE_ASSIGMENTS:
      return [...action.assigments];

    default: return state;
  }
};
