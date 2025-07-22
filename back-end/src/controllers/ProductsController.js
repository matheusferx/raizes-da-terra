const Products = require('../models/Products.js')

// Requisição para obter todos os produtos
const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    return res.status(200).json(products);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
    return res.status(500).json({ error: 'Internal server error'});
  }
}

// Requisição para obter um produto específico pelo ID
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Requisição para obter produtos por categoria
// Exemplo de rota: GET /products/category/:category
const getProductByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const products = await Products.findAll({where: {category}});
    if (!products || products.length === 0) {
        return res.status(404).json({ error: 'No products found in this category' });
    }
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Requisição para criar um novo produto
const createProduct = async (req, res) => {
    try {
        const { name, price, description, image, category, stock, stripe_price_id } = req.body;
        const newProduct = await Products.create({ name, price, description, image, category, stock, stripe_price_id });
        return res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

// Requisição para deletar um produto de acordo com o ID
// Exemplo de rota: DELETE /products/:id
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    await product.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Requisição para alterar o produto de acordo com o ID
// Exemplo de rota: PUT /products/:id
const changeProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, image, category, stock, stripe_price_id } = req.body;
  try {
    const product = await Products.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    await product.update({ name, price, description, image, category, stock, stripe_price_id });
    return res.status(200).json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Exportando os controladores
module.exports = { getAllProducts, getProductById, getProductByCategory, createProduct, deleteProduct, changeProduct }