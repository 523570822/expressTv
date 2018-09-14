var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const user = require('./routes/user');
const api = require('./routes/api');
const loginApi = require('./routes/login');
const navigation = require('./routes/navigation');
const category = require('./routes/category');
const goods = require('./routes/goods');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//增加调试ip
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/user', user);
app.use('/api/login', loginApi);
app.use('/api', api);
app.use('/api/navigation', navigation);
app.use('/api/category', category);
app.use('/api/goods', goods);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  //如果不是404就跑出异常
  if(err.message != 'Not Found') {
    console.error(err);
  }
});

module.exports = app;
