const mongoose = require('mongoose')

//Schema da calculadora:É onde falamos quais os campos que teremos na calculadora
const calculadoraSchema = new mongoose.Schema({
  num1: Number,
  num2: Number,
  operador: String,
  resultado: Number,
  tipoDeOperacao: String
})

module.exports = mongoose.model('calculadora', calculadoraSchema)
