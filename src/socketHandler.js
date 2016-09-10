import cookie from 'js-cookie';

import * as actions from './actions';

export default (store, socket) => {
  socket.emit('new user', cookie.get('clientToken'));

  socket.on('user name', (name) => {
    store.dispatch(actions.saveUserName(name));
  });

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
