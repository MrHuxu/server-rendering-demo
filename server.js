import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './components/Home.jsx';

import express from 'express';
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/components'));

app.get('/', (req, res) => {
  res.status(200).render('index', {
    component: Home,
    markup: renderToString(<Home />)
  });
});

export default app;
