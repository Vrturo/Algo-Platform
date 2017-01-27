const express = require('express');
const path = require('path');

const app = express();

// Routes
const index = require('./routes/index.js');

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.listen(3000, () => {
  console.log('Magic is happening on port 3000');
});

// Default server response if no matching route is found
app.use((req, res, next) => {
  console.log('hi from global middleware');

  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
