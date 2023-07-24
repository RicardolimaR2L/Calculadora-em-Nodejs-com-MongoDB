const mongoose = require('mongoose')

const calculadoraSchema = new mongoose.Schema({
  tipoDeOperacao: String,
  expressao: String,
  resultado: Number
})

module.exports = mongoose.model('calculadora', calculadoraSchema)
