# Exemplo de JWT

Esse projeto é uma demonstração muito simples de como funciona o **JWT**, para o meu artigo [Entendendo a autenticação JWT](https://guilhermesteves.dev/tutoriais/entendendo-a-autenticacao-jwt)

## Rodando o projeto

Basta dar um `npm install` ou `yarn install` para instalar as dependências.

Após isso um `npm run start` ou `yarn run start`.

## Arquivos

Não criei testes, tampouco um modo de subir o projeto como debug, uma vez que o objetivo principal é informar como o JWT funciona e em que cenário ele é usado.

Não há uma arquitetura de pastas ou módulos, as pouquíssimas rotas estão escritas no `index.js`.

Temos um `users.js` apenas para validar o password (aberto) pra mostrar como usar o JWT.

## Rotas

O app tem apenas 4 rotas para demonstrar como o **JWT** funciona:

- `GET /`: Rota pública com um Hello World
- `GET /public`: Rota pública com uma frase de exemplo
- `GET /secret`: Rota apenas para usuários logados com uma outra de exemplo
- `POST /login`: Rota para logar um usuário