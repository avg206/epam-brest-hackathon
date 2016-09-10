/** src/reducers/index.js **/

import { combineReducers } from 'redux';
import tasks from './tasks';
import socket from './socket';
import ui from './ui';
import assigments from './assigments';

const helpApp = combineReducers({
  tasks,
  socket,
  ui,
  assigments,
});

export default helpApp;
