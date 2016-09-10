import * as constants from '../constants';

export const saveSocketInstance = (socket) => ({
  type: constants.SAVE_SOCKET_INSTANCE,
  socket,
});

export const saveUserName = (name) => ({
  type: constants.SAVE_USER_NAME,
  name,
});
