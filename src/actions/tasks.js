import * as constants from '../constants';

export const saveTasks = (tasks) => ({
  type: constants.SAVE_TASKS,
  tasks,
});

export const saveNewTask = (task) => ({
  type: constants.SAVE_NEW_TASK,
  task,
});

export const saveUpdatedTask = (task) => ({
  type: constants.SAVE_UPDATED_TASK,
  task,
});

export const removeDeletedTask = (id) => ({
  type: constants.REMOVE_DELETED_TASK,
  id,
});

export const setTasksFilter = (filter) => ({
  type: constants.SET_TASKS_FILTER,
  filter,
});

export const addNewTask = (task) => (dispatch, getState) => {
  const { socket } = getState();

  socket.emit('new task', task);
};

export const deleteTask = (task) => (dispatch, getState) => {
  const { socket } = getState();

  socket.emit('delete task', task._id);
};

export const moveTaskToProgress = (task) => (dispatch, getState) => {
  const { socket } = getState();

  socket.emit('update task', { ...task, state: 2 });
};

export const moveTaskToTODO = (task) => (dispatch, getState) => {
  const { socket } = getState();

  socket.emit('update task', { ...task, state: 1 });
};

export const moveTaskToDone = (task) => (dispatch, getState) => {
  const { socket } = getState();

  socket.emit('update task', { ...task, state: 3 });
};

export const assigne = (task) => (dispatch, getState) => {
  const { socket, user } = getState();

  socket.emit('update task', { ...task, assigne: user.name, state: 1 });
};
