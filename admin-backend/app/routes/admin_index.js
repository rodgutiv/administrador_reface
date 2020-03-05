
var express = require('express');
var router = express.Router();
var index_carrusel = require('../models/index_carrusel');
var fs = require('fs');
var moment = require('moment');

/* GET all index_carrusels */
router.get('/all', function(req, res, next) {
  index_carrusel.find({ }, function (err, index_carrusel){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!index_carrusel)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(index_carrusel)
    return res.json(index_carrusel);
  });
});

//Obtener imagenes activas en carrusel

/* GET images from carrusel */

router.get('/carrusel/:status', function(req, res, next) {
  var num_index = req.params.num_index;

  index_carrusel.find({ 'status': activo }, function (err, index_carrusel){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!index_carrusel)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(compras_libre)
    return res.send(index_carrusel);
  });
});


//create new index_carrusel
router.post('/new-image', function(req, res, next) {
  console.log(req.files.img1.name);
  var randomNumber = Math.floor(Math.random() * 100000);
  console.log("random number");
  console.log(randomNumber)
  var query = {
    'id' : randomNumber,
    'ruta': "/Users/macbookair/Documents/refacesys/replace-sys/admin-backend/app/public/imagenes_index_carrusel/" + req.files.img1.name,
    'num_index' : 0,
    'status': "Inactivo"
  }

  let img = req.files.img1;
  var route1 = "/Users/macbookair/Documents/refacesys/replace-sys/admin-backend/app/public/imagenes_index_carrusel/" + req.files.img1.name;
  index_carrusel.create(query)
  .then((index_carrusel) =>
  {
    console.log("creo index_carrusel");
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


//delete index_carrusel
router.post('/update-index-carrusel', function(req, res, next) {
//  var num_index = req.params.num_index;
//  var num_index = req.body[0].value;
//  var ruta = req.params.ruta;
//  var ruta = req.body[1].value;
var specific_data = req.body;
console.log('Datos de producto a actualizar')
console.log(specific_data)
var id = specific_data[0].value;
var num_index = specific_data[1].value;
  console.log("datos de update")
  console.log(num_index)
  console.log(id)
  //metodo para buscar el producto
  index_carrusel.find({'num_index': num_index})
  .then((rawResponse) =>{
    if(rawResponse.length == 0){
      console.log('correcto')
      //metodo que cambia el stock
      var query = {
        'num_index' : num_index,
        'status': "Activo"
      }

      index_carrusel.updateOne({ 'id': id }, query)
      .then((index_carrusel) => {
        console.log('update')
        console.log(index_carrusel)
        var result = {'success':true}
        console.log(result)
        return res.json(result);
      })
      .catch((err) => {
        return res.status(500).send('Error en la peticion');
      });
//      return res.status(404).send({message: 'Ningun registro identificado'});
    }else{
      console.log("tamaño del response")
      console.log(rawResponse.length)
      var result = {'success':false};
      console.log(result);
      return res.json(result);
    }
  })
    .catch((err) => {
      console.log(err)
      return res.status(500).send('Error en la peticion');
    });
});
//productos mas vendidos


module.exports = router;
