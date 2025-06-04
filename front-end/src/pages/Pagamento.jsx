import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Pagamento = ({ products }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const produto = products.find(p => p.id.toString() === id)

  
  const handleCheckout = async () => {
    try {
      const res = await fetch('https://raizes-do-vale-api.onrender.com/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: id })
      });

      const data = await res.json();
      window.location.href = data.url;

    } catch (error) {

      alert('Erro ao redirecionar para o pagamento');
      console.error('Erro ao iniciar o checkout:', error);
      return;
    }
  }
  
  if (!produto) {
    return <p>Produto não encontrado.</p>
  }

  return (
    <>
      <Header />
      <main className='container-base pagamento-page'>

        <div className='voltar' onClick={() => navigate(-1)} style={{cursor: 'pointer'}}> &lsaquo;</div>

        <div className='pagamento-produto'>
          <img src={produto.image.startsWith('http') ? produto.image : `/images/${produto.image}`} alt={produto.name} className="pagamento-imagem" />

          <div className='pagamento-detalhes'>
            <h2>{produto.name}</h2>
            <p>{produto.description}</p>
            <span>Categoria: {produto.category}</span>
            <h3>R$ {produto.price}</h3>
            <p style={{ fontStyle: 'italic', color: 'gray' }}>
              <strong>Observação:</strong> Este é um exemplo de pagamento com Stripe.
              <br/> Para Sucesso: 4242 4242 4242 4242 | 04/34 | CVC 123
              <br/> Para Falha: 4000 0000 0000 9995 | 04/34 | CVC 123
            </p>
            <button className='btn-pagar' onClick={handleCheckout}>Pagar</button>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Pagamento
