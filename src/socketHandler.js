import { saveTasks } from './actions';

export default (store, socket) => {
  socket.on('tasks', (tasks) => {
    store.dispatch(saveTasks(tasks));
  });
};
