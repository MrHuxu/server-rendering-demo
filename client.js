import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import routes from './routes';

var container = document.getElementById("container");
render(<Router routes={routes} />, container);