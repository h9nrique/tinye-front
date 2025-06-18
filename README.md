# 🔗 Tinye.me - Frontend

Aplicação frontend do projeto [Tinye.me](https://tinye.me), um encurtador de links com painel de gerenciamento, feito em **Next.js** com **TypeScript** e estilizado com **Tailwind CSS**.

Este repositório contém a interface web para cadastro, login, criação e gerenciamento dos links curtos, consumindo a API backend.

---

## [Link do repositório do Backend](https://github.com/h9nrique/tinye-backend)

---

## 🚀 Funcionalidades

- Tela de cadastro e login de usuários
- Interface para criação de links curtos
- Listagem, ativação/desativação e remoção de links
- Visualização de informações detalhadas dos links
- Armazenamento e uso do token JWT para autenticação
- Layout responsivo para desktop e mobile

---

## 🛠️ Tecnologias

- **Next.js**
- **TypeScript**
- **Tailwind CSS** – estilização rápida e responsiva
- **Axios** – para requisições HTTP à API
- **React Hook Form** – gerenciamento e validação de formulários
- **Zod** – validação de schemas de dados

---

## ⚙️ Como rodar localmente

### Pré-requisitos

- Node.js (versão 18+ recomendada)
- Yarn ou npm
- Backend Tinye.me rodando (configurar URL da API no `.env.local`)

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/h9nrique/tinye-front.git
cd tinye-front

# Instale as dependências
yarn install
# ou
npm install

# Crie um arquivo .env com a variável de ambiente da API
API_URL="http://localhost:8080/api/v1"
NEXT_PUBLIC_FRONTEND_URL="localhost:3000/"

# Rode em modo desenvolvimento
yarn dev
# ou
npm run dev
```

---

👨‍💻 Autor
Bruno Henrique Pereira  
[LinkedIn](https://www.linkedin.com/in/h9nrique/) • [GitHub](https://github.com/h9nrique) • [Portfólio](https://h9nrique.com.br/pt-BR)
