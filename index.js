require('babel-core/register');
require('babel-polyfill');

const server = require('./server/server').default;
const socket = require('./server/socket').default;
const http = require('http');

const serverApp = http.createServer(server)
  .listen(3400, () => console.log('Server listen port 3400'));

socket.listen(serverApp);
