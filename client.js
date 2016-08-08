import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { customCreateStore } from './store';

var initState = JSON.parse(unescape(window.__REDUX_INIT_STATE__));
var store = customCreateStore(initState);

var container = document.getElementById("container");
render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  container
);