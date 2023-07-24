const express = require('express') // importação do express
const routes = express.Router()

//Rotas do serviço
app.get('/calculadora', controllerCalculadora.index)
app.post('/calculadora', controllerCalculadora.store)

module.exports = routes //exportação das rotas
