/* * * * * * * * * Instancia de librerias * * * * * * * */
var fileUpload = require('express-fileupload')
var bodyParser = require('body-parser')
var express = require('express')
var helmet = require('helmet')
var vhost = require('vhost')
var https = require('https')
var http = require('http')
var cors = require('cors')
var path = require('path')
var fs = require('fs')

var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

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
// Utilizar funcionalidades del Ecmascript 6
'use strict'
// Cargamos el módulo de mongoose para poder conectarnos a MongoDB
var mongoose = require('mongoose');

// *Cargamos el fichero app.js con la configuración de Express
//var app = require('./app');

//var www = express.Router()
var main = express()

/** * * * * * * * Definir funciones staticas * * * * * * *  */
main.use(bodyParser.json())
main.use(fileUpload())
main.use(helmet())
main.use(cors())

// view engine setup
main.set('views', path.join(__dirname, 'views'));
main.set('view engine', 'jade');

main.use(logger('dev'));
main.use(express.json());
main.use(express.urlencoded({ extended: false }));

main.use('/', express.static(__dirname + '/admin'));

main.use('/', indexRouter);
main.use('/users', usersRouter);
main.use('/products', productosRouter);
main.use('/ayuda', ayudaRouter);
main.use('/compra', comprasLibreRouter);

main.use('/ad-pagos', adminPagosRouter);
main.use('/ad-productos', adminProductosRouter);
main.use('/ad-usuarios', adminUsuariosRouter);
main.use('/ad-compras', adminComprasRouter);

main.use('/noticias', noticiasRouter);
main.use('/promociones', promocionesRouter);

/*
main.use(cors("http://10.3.0.7:61"));
main.use(cors("http://10.3.0.7:61/dashboard"));
main.use(cors("http://10.3.0.7:61/admin"));
main.use(cors("http://10.3.0.7:61/clientes"));
main.use(cors("http://10.3.0.7:61/productos"));
main.use(cors("http://10.3.0.7:61/promociones"));
main.use(cors("http://10.3.0.7:61/noticias"));
main.use(cors("http://10.3.0.7:61/index"));
*/
/** Definir directorio estatico para front */
//www.use(express.static(path.join(__dirname, '/admin'), {index: false}))
main.use(express.static(path.join(__dirname, '/admin'), {index: false}))

main.get('*', function(request, response){
    response.sendFile('index.html', { root: __dirname+'/admin/'})
})

/*
main.get('/', function (req, res) {
  res.render('index', {});
});
*/
/** * * * * * * * * * * * * * * * * * * * *  * * * * * * * * */
//main.use(app)
//main.use(vhost('10.3.0.7:61',app))
//main = require('./app');

// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
var port = 61;
var SECUREPORT = 443;
// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;


// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect('mongodb://localhost/reface', { useNewUrlParser: true })
    .then(() => {
        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log("La conexión a la base de datos reface se ha realizado correctamente")

        /** * * * * * * * * * * * * * * * * * * * *  * * * * * * * * */
//        http.createServer(main).listen(port, function(err){
//           if(err){console.log(err)}
//            else{
//                console.clear()
 //               console.log("Reface admin escuchando en "+port+" exitosamente")
 //           }
 //       })

        // CREAR EL SERVIDOR WEB CON NODEJS
       main.listen(port, () => {
         console.log("servidor corriendo en http://localhost:61");
       });

    })
    // Si no se conecta correctamente escupimos el error
    .catch(err => console.log(err));