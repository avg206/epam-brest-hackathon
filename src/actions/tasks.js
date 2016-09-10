import * as constants from '../constants';

export const saveTasks = (tasks) => ({
  type: constants.SAVE_TASKS,
  tasks,
});

export const saveNewTask = (task) => ({
  type: constants.SAVE_NEW_TASK,
  task,
});

export const addNewTask = (task) => (dispatch, getState) => {
  const { socket } = getState();

  socket.emit('new task', task);
};
