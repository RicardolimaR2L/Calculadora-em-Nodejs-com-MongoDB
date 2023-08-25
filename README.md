# Calculadora com Histórico - Node.js + Banco de Dados
Este é um projeto de uma calculadora com história, desenvolvida em Node.js, que permite realizar operações matemáticas básicas e armazenar um registro no banco de dados para cada operação realizada. O projeto é voltado para o aprendizado e prática de conceitos relacionados ao desenvolvimento de aplicativos web utilizando Node.js e integração com um banco de dados.

## Funcionalidades

### POST
A rota POST da API permite que o usuário envie uma requisição com dois números e um caractere de operação para executar a operação desejada. Os parâmetros necessários para a requisição são os seguintes:

- Num1: O primeiro número da operação.
- Num2: O segundo número da operação.
- Operation: O caractere de operação que representa a operação desejada no formato de string (por exemplo, "+", "-", "*", "/").
A API realizará a operação matemática com os números fornecidos, registrará no banco de dados o tipo da operação ("adicionar", "subtrair", "multiplicar", "dividir"), a fórmula da operação e obter o resultado.

### GET
A rota GET da API permite que o usuário obtenha todo o histórico de operações realizadas. Cada registro no histórico conterá as seguintes informações:

- Id: Um identificador único para a operação no banco de dados.

- 1° Número  
- 2° Número  
- O sinal da operação realizada ("-", "-", "*", "/").

- Resultado: O resultado obtido pela operação.

- A operação realizada 

## Configuração do ambiente

Antes de executar o projeto, certifique-se de ter o Node.js instalado em sua máquina. Além disso, é necessário configurar o banco de dados que será utilizado para armazenar o histórico de operações. Neste projeto, utilizei o banco de dados MongoDB. 

## Dependêcias
   - Express :  4.18.2
   - Mongoose : 7.4.0
