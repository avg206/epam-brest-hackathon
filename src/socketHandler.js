import { saveTasks, saveNewTask, saveAssigments } from './actions';

export default (store, socket) => {
  socket.on('tasks', (tasks) => {
    store.dispatch(saveTasks(tasks));
  });

  socket.on('assigne', (assigments) => {
    store.dispatch(saveAssigments(assigments));
  });

  socket.on('new task', (task) => {
    store.dispatch(saveNewTask(task));
  });
};
