const mongoose = require('mongoose')

const calculadoraSchema = new mongoose.Schema({
  tipoDeOperação:String,
  expression: String,
  result: Number
})

module.exports = mongoose.model('calculadora', calculadoraSchema)
