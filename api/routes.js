const express = require('express') // importação do express
const routes = express.Router()
const controllerCalculadora = require('./server/controller/controllerCalculadora');


module.exports = routes //exportação das rotas
