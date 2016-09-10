require('babel-core/register');
require('babel-polyfill');

const server = require('./server/server').default;
const socket = require('./server/socket').default;
const http = require('http');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/hackathon');

const serverApp = http.createServer(server)
  .listen(3400, () => console.log('Server listen port 3400'));

socket.listen(serverApp);
