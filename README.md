# Portfolio Pessoal

Porfolio em formato de Landing Page para divulgar meus projetos já realizados. Projeto de desenvolvimento próprio mas design da [DIO](https://github.com/digitalinnovationone).

## Introdução 🔥

### Links 🔗
- [Protótipo](https://www.figma.com/design/NkndT2SbyHJZWLEsaM8Xn3/DIO-Lab-Portf%C3%B3lio?node-id=0-1&node-type=canvas&t=RQ7xak8hPDOLjNNc-0)
- [Deploy]()
- [Código](https://github.com/tatyanepgoncalves/portfolio)

### Estrutura de Arquivos 📂

```ruby
 portfolio/
│
├── public/                     # Arquivos estáticos públicos
│   └── favicon.ico             # Ícone do site
│
├── src/                        # Código-fonte do projeto
│   ├── assets/                 # Arquivos estáticos, como imagens, fontes 
│   │
│   ├── components/             # Componentes reutilizáveis
│   │   ├── Header/             # Componente
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.scss
│   │   └── MenuMobile/         # Componente       
│   │       ├── MenuMobile.jsx
│   │       └── MenuMobile.module.scss
│   │
│   ├── styles/                 # Estilos globais
│   │   ├── _variables.scss     # Variáveis Sass
│   │   └── global.scss         # Estilos globais e resets
│   │
│   ├── App.jsx                 # Componente principal do aplicativo
│   ├── main.jsx                # Ponto de entrada
│
├── .gitignore                  # Arquivos e pastas ignorados pelo Git
├── package.json                # Dependências e scripts
├── package-lock.json           # Dependências e scripts
├── README.md                   # Documentação do projeto
└── vite.config.js              # Configurações do Vite

```


## Pré-requisitos ⚙️
1. **Node.JS e NPM**
- **Node.JS**: Certifique-se de ter o Node.JS instalado. Você pode baixar e instalar no [site oficial do Node.JS](https://nodejs.org/pt).
- **NPM (Node Package Manager)**: Geralmente é instalado junto com o Node.js. Confirme que ambos estão instalados executando:

```bash
  node -v
  npm -v
```
<br>

2. **Vite**
- **Vite**: Este é o bundler que usamos para criar e rodar o projeto React. Vite é rápido e otimizado para desenvolvimento.

Para instalar e inicializar um projeto com Vite, use o comando:

```bash
  npm create vite@latest
```
<br>

3. **Dependências do Projeto**
Após criar o projeto com Vite, navegue até o diretório do projeto e instale as dependências que você precisará:

- *React e React-DOM* (instalados automaticamente com o template Vite)

- *Sass*: Para adicionar suporte ao Sass, instale o pacote:

```bash
  npm install sass
```
- *Lucide Icons*: Para ícones responsivos e leves, instale o pacote `lucide-react`:

```bash
  npm install lucide-react
```
<br>

4. **Executando o Projeto**
Com tudo configurado, você pode iniciar o servidor de desenvolvimento com:

```bash
  npm run dev
```
<br>

## Tecnologias usadas: 📦
- **React** - Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite** - Ferramenta de bundling rápida para desenvolvimento de projetos frontend, otimizada para React.
- **SASS** - Extensão de CSS que permite o uso de variáveis, aninhamento e mixins para estilos mais organizados.
- **Lucide Icon** - Biblioteca de ícones em SVG para adicionar ícones responsivos e personalizáveis ao projeto.
- **JavaScript (ES6+)** - Para lógica de componentes e manipulação de dados.
- **HTML** - Estrutura básica do aplicativo.
- **CSS** - Para estilização de elementos base.

<br>

## Autores 👷
- **Tatyane Gonçalves** - *Desenvolvedora* - [@tatyanepgoncalves](https://github.com/tatyanepgoncalves)
- **Elidiana Andrade** - *Tech Education Analyst e Desenvolvedora Frontend* - [@elidianaandrade](https://github.com/elidianaandrade)