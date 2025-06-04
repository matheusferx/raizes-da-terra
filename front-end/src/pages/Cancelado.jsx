import React from 'react'
import { Link } from 'react-router-dom'

const Cancelado = () => {
  return (
    <div className="success-container">
      <div className="success-card">
        <div className="crossmark">✖</div>
        <h1>Pagamento Cancelado</h1>
        <p>Você cancelou a tentativa de pagamento ou algo deu errado.</p>
        <Link to="/" className="cancell-btn">Voltar para a loja</Link>
      </div>
    </div>
  )
}

export default Cancelado