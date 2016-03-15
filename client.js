import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import { rootStore } from './store';

var container = document.getElementById("container");
render(
  <Provider store={rootStore}>
    <Router routes={routes} history={browserHistory} />
  </Provider>, container
);