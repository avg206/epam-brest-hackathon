import socket from 'socket.io';
import moment from 'moment';

import Task from '../model/task';
import config from '../config/assigne.json';

const io = socket();

io.on('connect', async(so) => {
  const tasks = await Task.find();
  so.emit('tasks', tasks);
  so.emit('assigne', config);

<<<<<<< HEAD
  so.on('new task', async(newTask) => {
    let task = new Task(newTask);
    task = await task.save();
    io.emit('new task', task);
=======
  so.on('new task', (newTask) => {
    const task = new Task({
      ...newTask,
      time: moment().format(),
      state: 1,
    });
    task.save();

    io.emit('new task', newTask);
>>>>>>> 097e078e5bf4676dc9c507b718b9fefe48198051
  });

  so.on('delete task', async(id) => {
    await Task.findOneAndRemove(id);
    io.emit('delete task', id);
  });

  so.on('update task', async(update) => {
    const task = await Task.findOneAndUpdate({ _id: update.id }, update, { new: true });
    if (!task) so.emit('error', 'Task deleted');
    else io.emit('update task', task);
  });
});

export default io;
