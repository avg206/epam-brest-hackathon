/** src/app.js **/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import socketIO from 'socket.io-client';

import { saveSocketInstance } from './actions';
import helpApp from './reducers';
import App from './containers/App/';
import socketHandler from './socketHandler.js';

const loggerMiddleware = createLogger();

const store = createStore(
  helpApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

const socket = socketIO('https://localhost:3400');
socketHandler(store, socket);
store.dispatch(saveSocketInstance(socket));


render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
