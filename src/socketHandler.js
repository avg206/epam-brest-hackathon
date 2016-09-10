import * as actions from './actions';

export default (store, socket) => {
  socket.on('tasks', (tasks) => {
    store.dispatch(actions.saveTasks(tasks));
  });

  socket.on('assigne', (assigments) => {
    store.dispatch(actions.saveAssigments(assigments));
  });

  socket.on('new task', (task) => {
    store.dispatch(actions.saveNewTask(task));
  });

  socket.on('update task', (task) => {
    store.dispatch(actions.saveUpdatedTask(task));
  });

  socket.on('delete task', (id) => {
    store.dispatch(actions.removeDeletedTask(id));
  });
};
