require('babel-core/register');
require('babel-polyfill');

const fs = require('fs');
const https = require('https');
const config = require('./config/backend.js');
const apiServer = require('./backend/server').default;
require('./backend/socket');

const PORT = process.env.PORT || config.apiPort;
const ENV = process.env.NODE_ENV;

if (ENV === 'production') {
  apiServer.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
  });
} else {
  https.createServer({
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem'),
    passphrase: 'qwerty',
  }, apiServer).listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
  });
}
