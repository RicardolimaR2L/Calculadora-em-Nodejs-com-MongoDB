// Importa o módulo 'mongoose' (biblioteca para trabalhar com MongoDB em Node.js)
const mongoose = require('mongoose')

// Declaração da função 'conectarNoBanco', que será exportada para ser utilizada em outros módulos
function conectarNoBanco() {
  // Utiliza a variável de ambiente 'URL_DATABASE' para conectar-se ao banco de dados
  mongoose.connect(process.env.URL_DATABASE, {
    useNewUrlParser: true, // Opção para usar o novo mecanismo de análise de URL do MongoDB
    useUnifiedTopology: true // Opção para usar o novo mecanismo de descoberta e monitoramento de servidores do MongoDB
  })

  // Armazena a conexão do mongoose em uma variável chamada 'db'
  const db = mongoose.connection

  // Define um evento de erro para a conexão com o banco de dados, que imprimirá o erro no console caso ocorra
  db.on('error', error => console.log(error))

  // Define um evento 'once' (executa apenas uma vez) que indica que o banco de dados foi conectado com sucesso
  // Quando a conexão é aberta, imprime 'banco de dados conectado' no console
  db.once('open', () => console.log('banco de dados conectado'))
}

// Exporta a função 'conectarNoBanco', tornando-a disponível para outros módulos
module.exports = conectarNoBanco
