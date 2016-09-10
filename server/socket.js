import socket from 'socket.io';
import moment from 'moment';

import Task from '../model/task';
import config from '../config/assigne.json';

const io = socket();

io.on('connect', async(so) => {
  const tasks = await Task.find();
  so.emit('tasks', tasks);
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

export default io;
