/** src/app.js **/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import helpApp from './reducers';
import App from './containers/App/';

const loggerMiddleware = createLogger();

const store = createStore(
  helpApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);