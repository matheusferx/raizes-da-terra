require('dotenv').config();

// Inicialisa o Stripe com a chave secreta
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY) // coloque sua chave secreta no .env
module.exports = stripe