
# Raízes do Vale

## ⚠️ Este projeto foi desenvolvido com fins exclusivamente educacionais.
Ele está funcional, mas não possui qualquer finalidade comercial ou intenção de venda.

A escolha do tema está diretamente ligada à minha cidade natal, Minas Novas, localizada no Vale do Jequitinhonha – uma região rica em cultura e arte popular.
As referências visuais e artísticas utilizadas no projeto buscam expressar o orgulho, a identidade e a beleza única desse lugar tão especial.

Este é um projeto full-stack para uma loja online chamado **Raízes do Vale**, desenvolvido com **React** no front-end e **Node.js + Express** no back-end, utilizando **PostgreSQL** como banco de dados e **Stripe** para pagamentos.

---

## Estrutura do Projeto

```
raizes-do-vale/
│
├── front-end/       # React + Vite + Tailwind
└── back-end/        # Node.js + Express + Sequelize
```

---

## Tecnologias Utilizadas

### Front-end

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [EmailJS](https://www.emailjs.com/)
- [Stripe JS](https://stripe.com/docs/js)

### Back-end

- [Node.js](https://nodejs.org/)
- [Express 5](https://expressjs.com/)
- [Sequelize ORM](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Stripe API](https://stripe.com/docs/api)
- [dotenv](https://github.com/motdotla/dotenv)
- [cors](https://github.com/expressjs/cors)

---

## Scripts Disponíveis

### Front-end (`/front-end`)

| Comando         | Descrição                         |
|-----------------|-----------------------------------|
| `npm run dev`   | Inicia o servidor de desenvolvimento com Vite |
| `npm run build` | Cria uma build de produção        |
| `npm run preview` | Pré-visualiza o projeto em produção |
| `npm run lint`  | Executa o lint com ESLint         |

### Back-end (`/back-end`)

| Comando            | Descrição                                     |
|--------------------|-----------------------------------------------|
| `npm start`        | Inicia o servidor com `src/server.js`         |
| `npm run sequelize`| Comando auxiliar para usar o `sequelize-cli`  |

---

## Estrutura de Pastas Recomendada

### Front-end

```
front-end/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── services/       # Chamadas Axios
│   ├── App.jsx
│   └── main.jsx
```

### Back-end

```
back-end/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── database/
│   ├── config/
│   └── server.js
├── .env
└── migrations/         # via sequelize-cli
```

---

## Como Rodar Localmente

### Pré-requisitos

- Node.js LTS
- PostgreSQL
- npm

### Clone o repositório

```bash
git clone https://github.com/seu-usuario/raizes-do-vale.git
cd raizes-do-vale
```

### Backend

```bash
cd back-end
npm install
# Configure o .env
npm start
```

### Frontend

```bash
cd front-end
npm install
npm run dev
```

---

## Configuração do .env (Backend)

Crie um arquivo `.env` na pasta `back-end/` com o seguinte conteúdo:

```env
DATABASE_URL=postgres://user:password@localhost:5432/raizes
STRIPE_SECRET_KEY=sk_test_xxx
PORT=3000
```

---

## Stripe

A integração com Stripe é feita tanto no front quanto no back-end. Certifique-se de ter uma conta e uma chave válida.

---

## Contato

Projeto feito para fins educacionais e como portfólio.  
Entre em contato via [LinkedIn]([https://www.linkedin.com/in/matheus-fernandes-55b341277/]) ou abra uma issue para dúvidas ou sugestões.
