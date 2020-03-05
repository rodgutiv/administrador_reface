'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var PromocionesProductoSchema = Schema({
  id_promo: String,
  id_producto: String,
  precio_original: Number,
  nuevo_precio: Number,
  status: String
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('PromocionesProducto', PromocionesProductoSchema);
