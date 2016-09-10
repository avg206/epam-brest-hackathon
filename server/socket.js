import socket from 'socket.io';
import moment from 'moment';
import jwt from 'jsonwebtoken';

import Task from '../model/task';
import config from '../config/assigne.json';

const io = socket();

const authentication = (token) => jwt.verify(token, 'task');
const checkUser = (name, nameReq) => name === nameReq;

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
      if (!checkUser(name, newTask.name)) return;

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

      if (!checkUser(name, deleteTask.creator)) return;

      await deleteTask.remove();
      io.emit('delete task', id);
    });

    so.on('update task', async(update) => {
      let task = await Task.findOne({ _id: update._id });

      if (!task) so.emit('error', 'Task deleted');
      if (!checkUser(name, task.creator) || !checkUser(name, task.assigne)) return;

      task = Object.assigne({}, task._doc, update);
      await task.save();
      io.emit('update task', task);
    });
  });
});

export default io;
