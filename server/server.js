import socket from './socket';
import express from 'express';

const app = express();
app.listen(3400, () => console.log('Server listen 3400'));

socket.listen(app);
export default app;
