var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload = require('express-fileupload');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var ayudaRouter = require('./routes/ayuda');
var comprasLibreRouter = require('./routes/compras_libre');

var adminPagosRouter = require('./routes/admin_pagos');
var adminProductosRouter = require('./routes/admin_productos');
var adminUsuariosRouter = require('./routes/admin_usuarios');
var adminComprasRouter = require('./routes/admin_ordenes_compra');

var noticiasRouter = require('./routes/noticias');
var promocionesRouter = require('./routes/promociones')

var app = express();

console.log("construidas las rutas");

/*
app.use(cors("http://10.3.0.7:61"));
app.use(cors("http://10.3.0.7:61/dashboard"));
app.use(cors("http://10.3.0.7:61/admin"));
app.use(cors("http://10.3.0.7:61/clientes"));
app.use(cors("http://10.3.0.7:61/productos"));
app.use(cors("http://10.3.0.7:61/promociones"));
app.use(cors("http://10.3.0.7:61/noticias"));
app.use(cors("http://10.3.0.7:61/index"));
//app.use(cors("http://localhost:3030/web"));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());
//app.use('/', express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/admin'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productosRouter);
app.use('/ayuda', ayudaRouter);
app.use('/compra', comprasLibreRouter);

app.use('/ad-pagos', adminPagosRouter);
app.use('/ad-productos', adminProductosRouter);
app.use('/ad-usuarios', adminUsuariosRouter);
app.use('/ad-compras', adminComprasRouter);

app.use('/noticias', noticiasRouter);
app.use('/promociones', promocionesRouter);

/*
app.use('/clientes', adminUsuariosRouter);
app.use('/productos', adminProductosRouter);
app.use('/compras', adminComprasRouter);
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
//  next(createError(404));
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

//app.use(function (req, res, next) {
//  res.header('Access-Control-Allow-Origin', '*'); // * => allow all origins
//  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS,DELETE');
//  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Accept'); // add remove headers according to your needs
//  next()
//})

module.exports = app;
