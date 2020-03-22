
var express = require('express');
var router = express.Router();
var noticia = require('../models/noticias');
var fs = require('fs');
var moment = require('moment');

/* GET all noticias */
router.get('/all', function(req, res, next) {
  noticia.find({ }, function (err, noticia){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!noticia)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(noticia)
    return res.json(noticia);
  });
});

/* Update noticia */
router.post('/update-noticia', function(req, res, next) {
  
  var datos = req.body;
  console.log("datos noticia: ",datos)
  var titulo = datos.titulo
  var query = {
    //'ruta': "/Users/macbookair/Documents/refacesys/replace-sys/admin-backend/app/imagenes_noticias/" + req.files.img1.name,
    'categoria': datos.categoria,
    'titulo': datos.titulo,
    'contenido': datos.contenido,
    'fecha': datos.fecha,
    'status': datos.estatus
  }
  console.log("query:", query)
  //metodo para buscar el producto
  noticia.find({'titulo': datos.titulo})
  .then((rawResponse) =>{
    if(!rawResponse){
      return res.status(404).send({message: 'Ningun registro identificado'});
    }else{
      console.log('correcto')
      //console.log(rawResponse)
      //var result = {'success':true}
      //return res.json(result);
      //metodo que cambia el stock
      noticia.updateOne({'titulo': titulo}, query)
      .then((noticia) => {
        console.log('update')
        console.log(noticia)
        var result = {'success':true}
        console.log(result)
        return res.json(result);
      })
      .catch((err) => {
        return res.status(500).send('Error en la peticion');
      });
    }
  })
  .catch((err) => {
    console.log(err)
    return res.status(500).send('Error en la peticion');
  });

/*
  var specific_data = req.body;
  console.log('Datos de noticia a actualizar')
  console.log(specific_data)

  var query = {
    'clave_interna': specific_data[1].value,
    'nombre': specific_data[2].value,
    'descripcion': specific_data[3].value,
    'tipo': specific_data[5].value,
    'marca': specific_data[6].value,
    'precio': specific_data[7].value,
//    'imagenes':specific_data[7].value,
    'autos': specific_data[10].value,
    'stock': specific_data[8].value,
    'categoria': specific_data[4].value,
    'status': specific_data[9].value
  }
  console.log('datos en query')
  console.log(query)
  //metodo para buscar el producto
  producto.find({'clave_interna': specific_data[1].value})
  .then((rawResponse) =>{
    if(!rawResponse){
      return res.status(404).send({message: 'Ningun registro identificado'});
    }else{
      console.log('correcto')
      //metodo que cambia el stock
      producto.updateOne({'clave_interna': specific_data[1].value}, query)
      .then((producto) => {
        console.log('update')
        console.log(producto)
        var result = {'success':true}
        console.log(result)
        return res.json(result);
      })
      .catch((err) => {
        console.log('error en la consulta')
        console.log(err)
        return res.status(500).send('Error en la peticion');
      });
    }
  })
  .catch((err) => {
    console.log(err)
    return res.status(500).send('Error en la peticion');
  });
  */
});

//create new noticia
router.post('/new-noticia', function(req, res, next) {

  console.log('Datos de nueva noticia');
  console.log(req.body);
  console.log('Imagen asociada:');
  console.log(req.files.img1.name);

  var specific_data = req.body;
  var fecha = moment(Date.now()).format('MM/DD/YYYY');
  console.log(fecha);
  console.log(specific_data);

  var query = {
    'ruta': "http://10.3.0.7:63/noticias/" + req.files.img1.name,
    'categoria': specific_data.categoria,
    'titulo': specific_data.titulo,
    'contenido': specific_data.contenido,
    'fecha': fecha,
    'status': "Activo"
  }

  console.log(query);

  let img = req.files.img1;
  var route1 = "/var/www/html/replace-sys/backend/app/public/noticias/" + req.files.img1.name;
  noticia.create(query)
  .then((noticia) =>
  {
    console.log("creo noticia");
    img.mv(route1, function(err)
    {
      if (err)
      {
        console.log("no movio nada");
        return res.status(500).send(err);
      }
      res.send('File uploaded!');
    })
  });
});


//delete noticia
router.post('/delete-noticia/:titulo', function(req, res, next) {
  var titulo = req.params.titulo;
  console.log(titulo)
  //metodo para buscar el producto
  noticia.find({'titulo': titulo})
  .then((rawResponse) =>{
    if(!rawResponse){
      return res.status(404).send({message: 'Ningun registro identificado'});
    }else{
      console.log('correcto')
      //metodo que cambia el stock
      noticia.updateOne({'titulo': titulo}, {'status': "Inactivo" })
      .then((noticia) => {
        console.log('update')
        console.log(noticia)
        var result = {'success':true}
        console.log(result)
        return res.json(result);
      })
      .catch((err) => {
        return res.status(500).send('Error en la peticion');
      });
    }
  })
  .catch((err) => {
    console.log(err)
    return res.status(500).send('Error en la peticion');
  });
});

//active noticia
router.post('/active-noticia/:titulo', function(req, res, next) {
  var titulo = req.params.titulo;
  console.log(titulo)
  //metodo para buscar el producto
  noticia.find({'titulo': titulo})
  .then((rawResponse) =>{
    if(!rawResponse){
      return res.status(404).send({message: 'Ningun registro identificado'});
    }else{
      console.log('correcto')
      //metodo que cambia el stock
      noticia.updateOne({'titulo': titulo}, {'status': "Activo" })
      .then((noticia) => {
        console.log('update')
        console.log(noticia)
        var result = {'success':true}
        console.log(result)
        return res.json(result);
      })
      .catch((err) => {
        return res.status(500).send('Error en la peticion');
      });
    }
  })
  .catch((err) => {
    console.log(err)
    return res.status(500).send('Error en la peticion');
  });
});
//productos mas vendidos


module.exports = router;
