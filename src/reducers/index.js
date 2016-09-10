/** src/reducers/index.js **/

import { combineReducers } from 'redux';
import tasks from './tasks';
import socket from './socket';
import ui from './ui';

const helpApp = combineReducers({
  tasks,
  socket,
  ui,
});

export default helpApp;
