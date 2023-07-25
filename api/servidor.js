require('dotenv').config()
const express = require('express')
const conectarNoBanco = require('./server/bancoDeDados')
const controllerCalculadora = require('./server/controller/controllerCalculadora')
const app = express()
conectarNoBanco()

app.use(express.json())

//Rotas do serviço
app.get('/calculadora', controllerCalculadora.index) //Retorna todos os calculos do banco de dados

app.post('/calculadora', controllerCalculadora.store) //salva o calculo no banco de dados fazendo o uso do controller

const portaDoServidor = 5000

app.listen(portaDoServidor, () => {
  console.log(`Backend foi iniciado at http://localhost:${portaDoServidor}`)
})
