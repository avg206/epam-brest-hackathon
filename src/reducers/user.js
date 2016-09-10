import * as constants from '../constants';

const inititalState = {
  name: '',
};

export default (state = inititalState, action) => {
  switch (action.type) {
    case constants.SAVE_USER_NAME:
      return { ...state, name: action.name };

    default: return state;
  }
};
