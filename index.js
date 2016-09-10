require('babel-core/register');
require('babel-polyfill');

const server = require('./server/server.js');

server();
