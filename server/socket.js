import socket from 'socket.io';
import moment from 'moment';
import jwt from 'jsonwebtoken';

import Task from '../model/task';
import config from '../config/assigne.json';

const io = socket();

const authentication = (token) => jwt.verify(token, 'task');
const checkUser = (name, task) => {
  if (name === task.creator && name === task.assigne) return 3;
  if (name === task.creator) return 1;
  if (name === task.assigne) return 2;

  return 0;
};

const updateTask = (task, update) => {
  const permissions = checkUser(name, task);
  const checkPosition = update.state !== task.state;
  const checkAssigne = update.assigne !== task.assigne && task.assigne && !update.assigne;
  const assigne = update.assigne && !task.assigne;

  if ((!permissions && assigne)
    || (permissions > 1 && checkAssigne)) {
    return Object.assigne({}, task._doc, { assigne: update.assigne });
  }

  if (permissions > 1 && checkPosition) {
    return Object.assigne({}, task._doc, { state: update.state });
  }

  return null;
};

io.on('connect', (so) => {
  so.on('new user', async (coockie) => {
    const check = authentication(coockie);
    if (!check._doc) return;

    const name = check._doc.name;
    const tasks = await Task.find();
    so.emit('tasks', tasks);
    so.emit('user name', name);
    so.emit('assigne', config);

    so.on('new task', async(newTask) => {
      if (!checkUser(name, newTask)) return;

      let task = new Task({
        ...newTask,
        time: moment().format(),
        state: 1,
      });

      task = await task.save();
      io.emit('new task', task);
    });

    so.on('delete task', async(id) => {
      const deleteTask = await Task.findOne(id);

      if (checkUser(name, deleteTask) !== 1) return;

      await deleteTask.remove();
      io.emit('delete task', id);
    });

    so.on('update task', async(update) => {
      let task = await Task.findOne({ _id: update._id });

      if (!task) so.emit('error', 'Task deleted');

      task = updateTask(task, update);

      if (!task) return;

      await task.save();
      io.emit('update task', task);
    });
  });
});

export default io;
