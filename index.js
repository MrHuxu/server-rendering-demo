#!/usr/bin/env node
require('babel-register')({
  presets: ['es2015', 'react']
});
var app = require('./server').default;

var port = process.env.PORT || 16311;
app.listen(port, () => {
  console.log('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
