import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Pagamento from './pages/Pagamento'
import Sucesso from './pages/Sucesso'
import Cancelado from './pages/Cancelado'
import api from './services/api'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function App() {
  let [products, setProducts] = useState([])
  const query = useQuery()
  const category = query.get('category')

  useEffect(() => {
    async function fetchProducts() {
      if (category) {
        // Busca produtos pela categoria usando sua rota do back-end
        const response = await api.get(`/produtos/categoria/${category}`)
        setProducts(response.data)
      } else {
        // Busca todos os produtos
        const response = await api.get('/produtos')
        setProducts(response.data)
      }
    }
    fetchProducts()
  }, [category])
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos products={products} />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/produtos/:id" element={<Pagamento products={products} />} />
      <Route path="/sucesso" element={<Sucesso />} />
      <Route path="/cancelado" element={<Cancelado />} />
    </Routes>
  )
}

export default App
