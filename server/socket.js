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

  so.on('new task', (newTask) => {
    const task = new Task(newTask);
    task.save();
    io.emit('new task', newTask);
  });

  so.on('delete task', (id) => {
    Task.findOneAndRemove(id)
      .then(() => {
        io.emit('delete task', id);
      });
  });

  so.on('update task', (update) => {
    Task.findOneAndUpdate({ _id: update.id }, update, { new: true })
      .then((task) => {
        if (!task) so.emit('error', 'Task deleted');
        else io.emit('update task', task);
      });
  });
});

export default io;
