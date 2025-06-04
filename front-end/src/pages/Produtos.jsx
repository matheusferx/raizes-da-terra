import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionProduct from '../components/SectionProduct'

const Produtos = ({products = []}) => {
  return (
    <>
      <Header />
      <main>
        <div className="container-base">
          <h1 className="title-page">
            Produtos
          </h1>
          <div className='card-base-grid'>
           {products.length > 0 ? (
              products.map(produto => (
                <SectionProduct
                  key={produto.id}
                  id={produto.id}
                  title={produto.name}
                  description={produto.description}
                  price={produto.price}
                  category={produto.category}
                  image={
                    produto.image.startsWith('http')
                      ? produto.image
                      : `/images/${produto.image}`
                  }
                />
              ))
            ) : (
              <p>Nenhum produto encontrado.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Produtos