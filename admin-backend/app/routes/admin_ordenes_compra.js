
var express = require('express');
var router = express.Router();
var compras_libre = require('../models/compras_libre');
var carrito_compras = require('../models/carrito-compras');
var facturas = require('../models/facturas');

//Obtener todas las compras
/* GET all products */
router.get('/list-compras', function(req, res, next) {
  compras_libre.find({ }, function (err, compras_libre){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!compras_libre)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(compras_libre)
    return res.json(compras_libre);
  });
});

//Obtener datos de carritos por compra realizada

/* GET product by intern code */
router.get('/compras-data/:code', function(req, res, next) {
  var code = req.params.code;
  carrito_compras.find({ 'id_compras': code }, function (err, carrito_compras){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!carrito_compras)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(compras_libre)
    return res.send(carrito_compras);
  });
});

//Actualizar status de la compra

router.post('/compra-status', function(req, res, next) {
  var data = req.body;
//  var new_stock = 0;
  console.log(data)
  var id_compra = data[0].value;
  var estatus = data[1].value;
  console.log(id_compra)
  console.log(estatus)
      //metodo que cambia el status
  compras_libre.update({'id': id_compra}, {'estado': estatus })
    .then((compras_libre) => {
       console.log('update')
       console.log(compras_libre)
       return res.json(compras_libre);
      })
      .catch((err) => {
        return res.status(500).send('Error en la peticion');
      });
});

//Actualizar referencia de Oxxo
router.post('/actualizar-referencia/:ref', function(req, res, next) {
  var num_ref = req.params.ref;
  console.log(num_ref);
//  var num_ref = req.params.referencia;
  console.log('correcto')
  //metodo que cambia el status
  facturas.updateOne({'numero_referencia': num_ref })
    .then((facturas) => {
        console.log('update')
        console.log(facturas)
        return res.json(facturas);
      })
      .catch((err) => {
        return res.status(500).send('Error en la peticion');
      });
});

//Obtener dato de referencia de Oxxo
router.get('/obtener-referencia', function(req, res, next) {
  facturas.find({ }, function (err, facturas){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!facturas)
        return res.status(404).send({message: 'Ningun registro identificado'});
    console.log("facturas: ")
    console.log(facturas)
    return res.json(facturas);
  });
});

//Obtener compras por comprador

router.get('/mejores-compradores', function(req, res, next) {
  compras_libre.aggregate([
          {
            $group : {
              _id :  "$datos_personales.email" ,
              total_compra: { $sum : "$total_venta", },
              nombre: { $push: "$datos_personales.nombre_completo" } ,
              count : { $sum : 1 }
            }
           }
         ], function (err, compras_libre){
             if(err)
               return res.status(500).send('Error en la peticion');
             if(!compras_libre)
               return res.status(404).send({message: 'Ningun registro identificado'});
           //console.log(compras_libre)
           return res.json(compras_libre);
         });
});

//Obtener productos más vendidos

router.get('/productos-mas-vendidos', function(req, res, next) {
  carrito_compras.aggregate([
          {
            $group : {
              _id :  "$clave_productos" ,
              nombre: { $push : "$nombre" },
              cantidades: { $sum : "$cantidades" },
              count : { $sum : 1 }
            }
           }
         ], function (err, carrito_compras){
             if(err)
               return res.status(500).send('Error en la peticion');
             if(!carrito_compras)
               return res.status(404).send({message: 'Ningun registro identificado'});
           //console.log(compras_libre)
           return res.json(carrito_compras);
         });
});



module.exports = router;
