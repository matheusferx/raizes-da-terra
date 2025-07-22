require('dotenv').config();

// Conexão com o banco de dados PostgreSQL usando Sequelize
// Certifique-se de que as variáveis de ambiente estão definidas corretamente
module.exports = {
  username: process.env.USUARIO_DB,
  password: process.env.SENHA_DB,
  database: process.env.NOME_DB,
  host: process.env.HOST_DB,
  port: process.env.PORTA_DB || 5432,
  dialect: 'postgres',
  
  // Opções específicas do PostgreSQL para habilitar SSL
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false   
    }
  },
  define: {
    timestamps: true,
  },
};