const express = require('express')
const routes = require('./routes')
const cors = require('cors')
require('./database') // Isso garante que a conexão e os models sejam inicializados

//  Configura o servidor Express, habilita CORS, carrega rotas e inicia o backend.
const app = express()
app.use(express.json()) // Middleware para interpretar requisições com JSON
app.use(cors()) // Middleware para habilitar o CORS e permitir requisições do frontend

app.use(routes) // Carrega e aplica as rotas da aplicação

// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});