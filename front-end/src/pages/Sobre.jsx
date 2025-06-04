import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollRevealSection from '../components/ScrollRevealSection'

const Sobre = () => {
  return (
    
    <div className="page-sobre">
      <Header />
      <div className="container-base">
        <h1 className="title-page">
          Nosso Propósito
        </h1>
        
        <ScrollRevealSection>
          <div className="sobre-bloco sobre-bloco-terracota">
            <img 
              src="https://portalwp.s3.amazonaws.com/wp-content/uploads/2016/08/05161534/iStock-639487044-1.jpg" 
              alt="Artesã do Vale do Jequitinhonha" 
              className="sobre-imagem"
            />
    
            <p className="sobre-texto">
              Nascemos do barro, do couro e da madeira — daquilo que vem da terra e volta para ela.
              A <strong className="destaque">Raízes da Terra</strong> é mais do que uma loja: é um elo entre o que é ancestral e o que é atual, entre o Vale do Jequitinhonha e o mundo.
            </p>
          </div>
        </ScrollRevealSection>

        <ScrollRevealSection>
          <div className="sobre-bloco sobre-bloco-white">
            <p className="sobre-texto">
              Acreditamos que cada peça criada pelas mãos das mulheres artesãs carrega um traço de resistência e de beleza. Em cada tambor, vaso ou bordado, está impresso o ritmo da vida no Vale — uma região muitas vezes esquecida, mas que pulsa com cultura, fé, força e arte.
            </p>

            <img 
              src="https://i.calameoassets.com/151120200346-8dc8a60d93a4b5adb2bd25e4aa1f85ce/large.jpg" 
              alt="Artesã do Vale do Jequitinhonha" 
              className="sobre-imagem"
            />
          </div>
        </ScrollRevealSection>

        <ScrollRevealSection>
          <div className="sobre-bloco sobre-bloco-terracota">
            <img 
              src="https://lorifigueiro.com.br/wp-content/uploads/2020/10/DSC_0021-Festa-de-N.-S.-do-Rosario-dos-Homens-Pretos-de-Minas-Novas-Minas-Novas-junho-de-2017.jpg" 
              alt="Artesã do Vale do Jequitinhonha" 
              className="sobre-imagem"
            />

            <p className="sobre-texto">
              Nosso propósito é tornar visível o invisível. Valorizar o trabalho artesanal como uma forma legítima de existência, sustento e expressão. Quando você adquire uma peça aqui, não está apenas comprando um objeto: está apoiando histórias de mulheres que moldam o mundo com as próprias mãos, preservando tradições e construindo futuros com dignidade.
            </p>
          </div>
        </ScrollRevealSection>

        <ScrollRevealSection>
          <p className="sobre-texto final">
            Mais do que vender, queremos contar. Contar sobre a arte que nasce nos quintais de barro batido, nas conversas em roda, no silêncio da criação. E, com isso, mostrar que é possível consumir com consciência, respeitar com afeto e transformar com empatia.
            <br /><br />
            Bem-vindo à <strong className="destaque">Raízes da Terra</strong>. Onde cada detalhe tem alma, e cada criação tem um nome, uma origem, uma razão.
          </p>
        </ScrollRevealSection>
      </div>
      <Footer />
    </div>
  )
}

export default Sobre