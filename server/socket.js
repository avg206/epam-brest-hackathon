import socket from 'socket.io';
import moment from 'moment';
import jwt from 'jsonwebtoken';

import Task from '../model/task';
import config from '../config/assigne.json';

const io = socket();

const authentication = (token) => jwt.verify(token, 'task');

io.on('connect', (so) => {
  so.on('new user', async(coockie) => {
    const check = authentication(coockie);
    if (!check._doc) return;

    const name = check._doc.name;
    const tasks = await Task.find();
    so.emit('tasks', tasks);
    so.emit('user name', name);
    so.emit('assigne', config);

    so.on('new task', async(newTask) => {
      let task = new Task({
        ...newTask,
        time: moment().format(),
        state: 1,
      });

      task = await task.save();
      io.emit('new task', task);
    });

    so.on('delete task', async(id) => {
      await Task.findOneAndRemove(id);
      io.emit('delete task', id);
    });

    so.on('update task', async(update) => {
      const task = await Task.findOneAndUpdate({ _id: update._id }, update, { new: true });
      if (!task) so.emit('error', 'Task deleted');
      else io.emit('update task', task);
    });
  });
});

export default io;
