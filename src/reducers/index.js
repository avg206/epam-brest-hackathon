/** src/reducers/index.js **/

import { combineReducers } from 'redux';
import tasks from './tasks';
import socket from './socket';
import ui from './ui';
import assigments from './assigments';
import user from './user';

const helpApp = combineReducers({
  tasks,
  socket,
  ui,
  assigments,
  user,
});

export default helpApp;
