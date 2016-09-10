/** src/reducers/index.js **/

import { combineReducers } from 'redux';
import tasks from './tasks';

const helpApp = combineReducers({
  tasks,
});

export default helpApp;
