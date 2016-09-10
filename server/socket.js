import socket from 'socket.io';
import Task from '../model/task';
import config from '../config/assigne.json';

const io = socket();

io.on('connect', (so) => {
  Task.find()
    .then((tasks) => {
      so.emit('tasks', tasks);
      so.emit('assigne', config);
    });

  socket.on('new task', (newTask) => {
    const task = new Task(newTask);
    task.save();
    io.emit('new task', newTask);
  });
});

export default io;
