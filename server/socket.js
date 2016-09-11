import socket from 'socket.io';
import moment from 'moment';
import jwt from 'jsonwebtoken';

import Task from '../model/task';
import config from '../config/assigne.json';

const io = socket();

const authentication = (token) => jwt.verify(token, 'task');
const checkUser = (name, task) => {
  if ((name === task.creator && name === task.assigne)
    || name === 'Ivan Danilevich') return 4;

  if (name === task.assigne) return 3;
  if (name === task.creator) return 2;
  if (name) return 1;

  return 0;
};

const updateTask = (name, task, update) => {
  const permissions = checkUser(name, task);
  const checkPosition = update.state !== task.state;
  const checkAssigne = update.assigne !== task.assigne && task.assigne && !update.assigne;
  const assigne = update.assigne && !task.assigne;
  const comment = update.commennt !== task.comment;

  if (((permissions === 1 && assigne) || (permissions > 2 && checkAssigne))
    || (permissions > 1 && checkPosition) || (permissions > 2 && comment)) {
    return 1;
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
      const state = newTask.assigne ? 1 : 0;

      let task = new Task({
        ...newTask,
        state,
        time: moment().format(),
      });

      task = await task.save();
      io.emit('new task', task);
    });

    so.on('delete task', async(id) => {
      const deleteTask = await Task.findOne({ _id: id });
      const permissions = checkUser(name, deleteTask);

      if (!permissions || permissions === 3) return;

      await deleteTask.remove();

      io.emit('delete task', id);
    });

    so.on('update task', async(update) => {
      const task = await Task.findOne({ _id: update._id });
      const checkField = updateTask(name, task, update);

      if (!checkField || !task) return;

      task.assigne = update.assigne;
      task.state = update.state;
      task.comment = update.comment;

      await task.save();
      io.emit('update task', task);
    });
  });
});

export default io;
