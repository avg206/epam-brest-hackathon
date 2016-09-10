import * as constants from '../constants';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SAVE_SOCKET_INSTANCE:
      return action.socket;

    default: return state;
  }
};
