const Calculadora = require('../models/calculadora')
module.exports = {
  // Rota GET para buscar todos os cálculos
  async index(request, response) {
    try {
      // Utilizamos o modelo Calculadora para fazer a consulta no banco de dados
      const calculos = await Calculadora.find()

      // Retornamos a lista de cálculos em formato JSON com status 200
      return response.status(200).json({ calculos })
    } catch (error) {
      // Caso ocorra um erro na consulta, retornamos uma mensagem de erro com status 500
      response.status(500).json({ error: 'Erro ao buscar cálculos' })
    }
  },

  // Rota POST para criar um novo cálculo
  async store(request, response) {
    // Extrai a expressão e o resultado do corpo da requisição
    const { expressao, resultado, tipoDeOperacao } = request.body

    // Verifica se os dados estão corretos (não estão vazios)
    if (!expressao || !resultado || !tipoDeOperacao) {
      // Caso algum dado esteja faltando, retorna um erro com status 400
      return response.status(400).json({ error: 'Dados de cálculos inválidos' })
    }
    // Cria uma nova instância do modelo Calculadora com os dados recebidos
    const calculo = new Calculadora({
      tipoDeOperacao,
      expressao,
      resultado
    })

    try {
      // Salva o cálculo no banco de dados
      await calculo.save({})

      // Caso seja salvo com sucesso, retorna uma mensagem de sucesso com status 201
      return response
        .status(201)
        .json({ message: 'Calculos criada com sucesso' })
    } catch (error) {
      // Caso ocorra um erro ao salvar no banco de dados, retorna uma mensagem de erro com status 400
      response.status(400).json({ error: 'Não foi possível criar os calculos' })
    }
  }
}
