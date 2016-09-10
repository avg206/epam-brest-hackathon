import * as constants from '../constants';

export const saveTasks = (tasks) => ({
  type: constants.SAVE_TASKS,
  tasks,
});

export const saveNewTask = (task) => ({
  type: constants.SAVE_NEW_TASK,
  task,
});
