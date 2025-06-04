const express = require('express')
const { getAllProducts, getProductById, getProductByCategory, createProduct, deleteProduct, changeProduct}  = require('./controllers/ProductsController.js')
const { createCheckoutSession } = require('./controllers/PaymentController')

const router = express.Router()
const app = express()
app.use(express.json())

// Define todas as rotas da API
router.get('/produtos', getAllProducts) // Lista todos os produtos disponíveis
router.get('/produtos/:id', getProductById) // Busca um produto pelo ID
router.post('/produtos', createProduct) // Cria um novo produto no sistema
router.get('/produtos/categoria/:category', getProductByCategory) // Lista produtos filtrados por categoria
router.delete('/produtos/:id', deleteProduct) // Remove um produto com base no ID
router.put('/produtos/:id', changeProduct) // Atualiza os dados de um produto existente

router.post('/create-checkout-session', createCheckoutSession) // Cria uma sessão de pagamento no Stripe com base em um produto

module.exports = router