
<h3 align="center">
  Desafio Go Dev ProWay
</h3>

<p align="center">

  <a href="https://www.linkedin.com/in/eduardo-ribeiro-/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-dufellipeR-%235636D3">
  </a>
  
  <!-- <img alt="Repository size" src="https://img.shields.io/github/repo-size/dufellipeR/GOFinances?color=%235636D3"> -->
  
  <a href="https://github.com/dufellipeR/GOFinances/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/dufellipeR/GOFinances?color=%235636D3">
  </a>
  
  <a href="https://github.com/dufellipeR/GOFinances/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/dufellipeR/GOFinances?color=%235636D3">
  </a>
  
  <!-- <img alt="GitHub" src="https://img.shields.io/github/license/dufellipeR/GOFinances?color=%235636D3"> -->
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<!-- <p id="insomniaButton" align="center">
  <a href="" target="_blank">
    <img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
  </a>
</p> -->

## 💰 About the project

Go Dev desafio de programação ProWay

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)
- [React Icons](https://react-icons.netlify.com/#/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

<!-- Importe o arquivo `Insomnia.json` no Insomnia ou clique no botão [Run in Insomnia](#insomniaButton) -->

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/dufellipeR/godev.git && cd godev
```

**Follow the steps below**

### Backend

```bash
# Starting from the project root folder, go to backend folder
$ cd backend

# Install the dependencies
$ yarn

# Create the instance of postgreSQL using docker
$ docker run --name GOFinances-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=postgresql -p 5432:5432 -d postgres

# Make sure the keys in 'ormconfig.json' to connect with your database
# are set up correctly.

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To verify unit tests
$ yarn test

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

### Web

_Obs.: Before to continue, be sure to have the API running_

```bash
# Starting from the project root folder, go to frontend folder
$ cd frontend

# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the client
$ yarn start
```


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Eduardo Ribeiro 👋 [See my linkedin](https://www.linkedin.com/in/eduardo-ribeiro-/)
