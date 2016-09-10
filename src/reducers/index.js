/** src/reducers/index.js **/

import { combineReducers } from 'redux';
import tasks from './tasks';
import socket from './socket';

const helpApp = combineReducers({
  tasks,
  socket,
});

export default helpApp;
