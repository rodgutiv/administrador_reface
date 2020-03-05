'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var IndexSchema = Schema({
  id: String,
  ruta: String,
  num_index: String,
  status: String
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Index', IndexSchema);
