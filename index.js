require('babel-core/register');
require('babel-polyfill');

const fs = require('fs');
const https = require('https');
const mongoose = require('mongoose');

const server = require('./server/server').default;
const socket = require('./server/socket').default;

mongoose.connect('mongodb://127.0.0.1:27017/hackathon');

const serverApp = https.createServer({
  key: fs.readFileSync('./ssl/key.pem'),
  cert: fs.readFileSync('./ssl/cert.pem'),
  passphrase: 'qwerty',
}, server).listen(3500, () => console.log('Server listen port 3500'));

socket.listen(serverApp);
