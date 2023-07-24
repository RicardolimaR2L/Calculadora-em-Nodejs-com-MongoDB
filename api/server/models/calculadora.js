const mongoose = require("mongoose");

const calculadoraSchema = new mongoose.Schema({
  expression: String,
  result: Number,
});

module.exports = mongoose.model("calculadora", calculadoraSchema);
