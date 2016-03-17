import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import { rootStore } from './store';

import express from 'express';
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use((req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var comp = renderProps.components[renderProps.components.length - 1].WrappedComponent;
      comp.initState().then((state) => {
        res.status(200).render('index', {
          markup: renderToString(
            <Provider store={rootStore}>
              <RouterContext {...renderProps} />
            </Provider>
          ),
          initState: escape(JSON.stringify(state))
        });
      });
    } else {
      res.status(404).send('Not found')
    }
  })
});

export default app;