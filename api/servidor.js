require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const conectarNoBanco = require('./server/bancoDeDados')
const controllerCalculadora = require('./server/controller/controllerCalculadora');


const app = express();

conectarNoBanco()

app.use(express.json());

//Rotas do serviço
app.get("/calculadora", controllerCalculadora.index);
app.post("/calculadora", controllerCalculadora.store);

const portaDoServidor = 3333

app.listen(portaDoServidor, () => {
  console.log(`Backend foi iniciado at http://localhost:${portaDoServidor}`)
});
