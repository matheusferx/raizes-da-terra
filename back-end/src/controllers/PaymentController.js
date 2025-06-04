// Importa a instância configurada do Stripe
const stripe = require('../services/stripe')
const Products  = require('../models/Products')

// Controlador para criar uma sessão de checkout com Stripe de acordo com Id do produto
const createCheckoutSession = async (req, res) => {
  const { productId  } = req.body

  try {
    const product = await Products.findByPk(productId);

    // Se o produto não existir ou não tiver um stripe_price_id válido
    if (!product || !product.stripe_price_id) {
      return res.status(404).json({ error: 'Produto não encontrado ou sem price_id' });
    }
    
  // Cria uma sessão de checkout no Stripe com o preço associado ao produto
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: product.stripe_price_id,  // ID do preço configurado no Stripe
          quantity: 1,
        },
      ],
      mode: 'payment',      // Tipo de sessão: pagamento único
      success_url: 'http://localhost:5173/sucesso',
      cancel_url: 'http://localhost:5173/cancelado',
    })

    res.json({ url: session.url })
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message })
  }
}

module.exports = { createCheckoutSession }