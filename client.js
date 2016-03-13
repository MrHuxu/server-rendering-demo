import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

var container = document.getElementById("container");
render(<Router routes={routes} history={browserHistory} />, container);