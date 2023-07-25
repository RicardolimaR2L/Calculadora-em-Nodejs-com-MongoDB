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
    const { num1, num2, operador } = request.body

    // Verifica se os dados estão corretos (não estão vazios)
    if (!num1 || !num2 || !operador) {
      // Caso algum dado esteja faltando, retorna um erro com status 400
      return response.status(400).json({
        error:
          'Dados incompletos. Certifique-se de enviar num1, num2 e operador.'
      })
    }

    let resultado //estrutura de decisao para fazer os calculos de acordo com o operador inserido
    switch (operador) {
      case '+':
        resultado = num1 + num2
        break
      case '-':
        resultado = num1 - num2

        break
      case '*':
        resultado = num1 * num2 

        break
      case '/':
        resultado = num1 / num2

        break
      default:
        return response.status(400).json({
          error:
            'Operação inválida. As operações válidas são: "+", "-", "*", "/"'
        })
    }
    let tipoDeOperacao //estrutura de decisao para mostrar qual a operação realizada.
    switch (operador) {
      case '+':
        tipoDeOperacao = 'Adição'
        break
      case '-':
        tipoDeOperacao = 'Subtração'
        break
      case '*':
        tipoDeOperacao = 'Multiplicação'
        break
      case '/':
        tipoDeOperacao = 'Divisao'
        break
      default:
        return response.status(400).json({
          error: 'Operação inválida.'
        })
    }
    // Cria uma nova instância do modelo Calculadora com os dados recebidos
    const calculo = new Calculadora({
      num1,
      num2,
      operador,
      resultado,
      tipoDeOperacao
    })

    try {
      // Salva o cálculo no banco de dados
      await calculo.save()

      // Caso seja salvo com sucesso, retorna uma mensagem de sucesso com status 201
      return response
        .status(201)
        .json({ message: 'Cálculo criado com sucesso.' })
    } catch (error) {
      // Caso ocorra um erro ao salvar no banco de dados, retorna uma mensagem de erro com status 400
      return response
        .status(400)
        .json({ error: 'Não foi possível criar o cálculo.' })
    }
  }
}
