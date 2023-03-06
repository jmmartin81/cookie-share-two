const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const receiveCookiesRouter = require('./routes/getCookies');

const app = express();

// app.use(cors({
//   origin:true  ,// callback expects two parameters: error and options,
//   credentials: true, // Permitir el intercambio de cookies
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos en la solicitud
//   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin','x-xsrf-token'] // Cabeceras permitidas en la solicitud
// }));

app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', 'https://8697-2803-9800-909f-80fc-dcf9-acb5-6acb-3c25.sa.ngrok.io'); 
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, x-xsrf-token, X-Requested-With, Content-Type, Accept');
  next();
});

// Configuración de cabeceras "Forwarded" y "X-Forwarded-For"
//app.set('trust proxy', true);
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

app.use('/cookies',receiveCookiesRouter);

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
