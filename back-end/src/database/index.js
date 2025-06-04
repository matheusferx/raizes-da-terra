const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const Products = require('../models/Products.js')

// Desestrutura a configuração para separar credenciais e opções
const { database, username, password, ...options } = dbConfig

// Cria uma instância do Sequelize com os dados extraídos
const connection = new Sequelize(
    database,
    username,
    password,
    options // só as opções extras
)

// Inicializa o modelo de produto com a conexão
Products.init(connection)

module.exports = connection