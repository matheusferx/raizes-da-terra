import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionHome from '../components/SectionHome'
import Carousel from '../components/Carousel'
import {countries} from '../services/Data'
import ScrollRevealSection from '../components/ScrollRevealSection'

const Home = () => {
  return (
    <>
      <Header />


      <div className="container-base">
        <ScrollRevealSection>
          <h1 className="title-page">
            Oque Vendemos ?
          </h1>
        </ScrollRevealSection>

        <ScrollRevealSection>
          <Carousel images={countries} />
        </ScrollRevealSection>

        <ScrollRevealSection>
          <h1 className="title-page">
            Categorias
          </h1>
        </ScrollRevealSection>

        <ScrollRevealSection>
          <div className='card-base-grid'>
              
            <SectionHome
              title="Tambores"
              description="Feito com couro natural e madeira nativa."
              image="https://storage.googleapis.com/propcart-br.appspot.com/images/items/440_XjwKRTMiNPCOQ6Z2mC9M_1695055849418.JPG"
              category="tambores"
            />

            <SectionHome
              title="Produtos de Couro"
              description="Tradição e durabilidade em cada costura."
              image="https://i0.wp.com/dantecapelli.com.br/wp-content/uploads/2019/06/6.png?fit=1000%2C1000&ssl=1"
              category="produtos-de-couro"
            />

            <SectionHome
              title="Vasos de Barro"
              description="Modelado pelas mãos de artesãs do Vale."
              image="https://images.tcdn.com.br/img/img_prod/1137198/vaso_boliche_ceramica_crua_ceramica_sao_sebastiao_161_1_99c26c187ac724241d065c3eeda570b4.png"
              category="Barro"
            />
          </div>
        </ScrollRevealSection>
      </div>
      
      <Footer />
    </>
  )
}

export default Home