
# RocketNotes API
RocketNotes é uma aplicação feita no curso explorer da Rocketseat, o usuário pode:

- Criar sua conta
- Alterar seus dados
- Colocar uma foto de perfil 
- Criar uma nota
- Filtra notas pela tag
- Filtras notas pela barra de pesquisa


[Rocketseat](https://www.rocketseat.com.br)

## Preview

![image](https://github.com/gabrielbarros23/Food-Explorer-FrontEnd/assets/91755263/16d57e60-52a7-4124-9478-c1efc105e776)

![image](https://github.com/gabrielbarros23/Food-Explorer-FrontEnd/assets/91755263/5d5b2a69-3987-4fbb-89cf-c60462d8a6ac)

![image](https://github.com/gabrielbarros23/Food-Explorer-FrontEnd/assets/91755263/3cbd69b2-99ad-4ee5-8923-9f0d9eb5de51)

![image](https://github.com/gabrielbarros23/Food-Explorer-FrontEnd/assets/91755263/d53bbaf7-db2e-49a7-9681-5f7f4d0a89b3)




## Deploy

Clone o projeto

```bash
  git clone git@github.com:gabrielbarros23/RocketNotes-API.git
```

Entre no diretório do projeto

```bash
  cd RocketNotes-API
```

Instale as dependências

```bash
  npm install
```

Preencha os campos vazios no arquivo .env.example

```bash
  AUTH_SECRET=
  PORT=
```

Comando de Migration

```bash
  npm run migrate
```

Inicie o servidor

```bash
  npm run dev
```

## FrontEnd

O FrontEnd esta conectado com a api hospedada no render. No link abaixo estará o repositório FrontEnd com as instruções para conectar-se com o BackEnd no modo desenvolvedor

[FrontEnd](https://github.com/gabrielbarros23/RocketNotes-FrontEnd)

## Stacks

- [bcryptjs]( https://www.npmjs.com/package/bcryptjs)
- [cors]( https://www.npmjs.com/package/cors)
- [dotenv]( https://www.npmjs.com/package/dotenv)
- [express]( https://www.npmjs.com/package/express)
- [express-assync-erros](https://www.npmjs.com/package/express-async-errors)
- [jsonwebtoken]( https://www.npmjs.com/package/jsonwebtoken)
- [knex]( https://www.npmjs.com/package/knex)
- [multer]( https://www.npmjs.com/package/multer)
- [pm2]( https://www.npmjs.com/package/pm2)
- [sqlite]( https://www.npmjs.com/package/sqlite)
- [sqlite3]( https://www.npmjs.com/package/sqlite3)
- [jest]( https://www.npmjs.com/package/jest)
- [nodemon]( https://www.npmjs.com/package/nodemon)

BackEnd foi hospedado no Render e o FrontEnd no Netlify

- [Render](https://render.com/)
- [Netlify](https://www.netlify.com/)


## Resultado

**OBS: Por ser uma host gratuita, o BackEnd hiberna após ficar inativo. Ao usar a aplicação, ela dará início normalmente em 1 minuto.**

[Resultado Final](https://rocketnotes23.netlify.app/)