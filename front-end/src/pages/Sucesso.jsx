import React from 'react'
import { Link } from 'react-router-dom'

const Sucesso = () => {
  return (
    <div className="success-container">
      <div className="success-card">
        <div className="checkmark">✔</div>
        <h1>Pagamento Realizado!</h1>
        <p>Obrigado por sua compra. Seu pedido foi processado com sucesso.</p>
        <Link to="/" className="success-btn">Voltar para a loja</Link>
      </div>
    </div>
  )
}

export default Sucesso