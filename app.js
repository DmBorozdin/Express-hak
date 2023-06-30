import {sequelize} from './db'
import {Users} from "./db/user";
import {Posts} from "./db/posts";

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
});

module.exports = app;

async function start(){
  try {
   await sequelize.sync({alter: true, force: true})
    
  }catch (e) {
    //methods to create
    await Users.create({
      id: '1',
      user: 'Иванов',
      password: '1234'
    })
    await Posts.create({
      id: '1',
      info: 'info',
      id_users: '1234'
    })
    //methods to update
    await Posts.update(
        {
          info: 'new info',
        },
        {
          where: {
            id: 1,
          },
        }
    )
    //methods to delete posts
    await Posts.destroy({
      where: {
        id: 1,
      },
    })
  }
}