import * as constants from '../constants';

const initialState = {
  addPopup: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.OPEN_ADD_FORM:
      return { ...state, addPopup: true };

    case constants.CLOSE_ADD_FORM:
      return { ...state, addPopup: false };

    default:
      return state;
  }
};
