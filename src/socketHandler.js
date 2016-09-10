import { saveTasks, saveNewTask } from './actions';

export default (store, socket) => {
  socket.on('tasks', (tasks) => {
    store.dispatch(saveTasks(tasks));
  });

  socket.on('new task', (task) => {
    store.dispatch(saveNewTask(task));
  });
};
