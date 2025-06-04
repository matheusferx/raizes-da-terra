import {useState} from 'react'
import emailjs from '@emailjs/browser'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contato = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault()

    if (name === '' || email === '' || phone === '' || message === '') {
      alert("Por favor, preencha todos os campos.")
      return
    }

    const templateParams = {
      from_name: name,
      email: email,
      phone: phone,
      message: message
    }

    emailjs.send('service_sp3gvaw', 'template_a9bqaqy', templateParams, 'h7G-yeoJV_iweLTJU')
    .then((response) => {
      console.log('Email enviado com sucesso!', response.status, response.text)
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    }, (error) => {
      console.error('Erro ao enviar email:', error)
      alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.")
    })

  }

  return (
    <div className='page-contato'>
      <Header />
      <div className="container-base container-contato">
        <h1 className="title-page">Contato</h1>

        <p className="description-contato">
          Para dúvidas, sugestões ou mais informações, Preencha o formulário abaixo ou entre em contato conosco através das Informações de Contato.
        </p>

        <form className="form-contato" onSubmit={sendEmail}>

          <input className='input' type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)}/>
          <input className='input' type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input className='input' type="tel" placeholder="Digite seu telefone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          <textarea className='textarea' placeholder="Digite sua mensagem..." value={message} onChange={(e) => setMessage(e.target.value)}/>

          <div className="contato-button-wrapper">
            <button type="submit">Enviar</button>
          </div>

        </form>

        <h2 className="subtitle-contato">Informações de Contato</h2>

        <div className="contato-info">
          <p>Email: <a href="mailto:contato@exemplo.com">contato@exemplo.com</a></p>
          <p>Telefone: <a href="tel:+5511999999999">+55 11 99999-9999</a></p>
          <p>Instagram: <a href="https://www.instagram.com/exemplo" target="_blank" rel="noopener noreferrer">@exemplo</a></p>
        </div>
        
      </div>

      <Footer />
    </div>
  )
}

export default Contato