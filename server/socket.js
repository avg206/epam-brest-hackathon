import socket from 'socket.io';

const io = socket();

io.on('connect', (so) => {
  console.log('SOCKET ON');
  so.on('disconnect', () => console.log('SOCKET OFF'));
});

export default io;
