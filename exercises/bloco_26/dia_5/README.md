### Bloco 26, Dia 5 -> Express: Middlewares

_**Exercícios 26.5 - Parte I**_

 - Crie uma rota `POST` `/user/register` que receba uma requisição que envie `username`, `email` e `password` no `body` da requisição, onde:
   - `username` deve ter mais de `3` caracteres;
   - `email` deve ter o formato `email@mail.com`;
   - `password` deve conter no mínimo `4` caracteres e no máximo `8` **(todos números)**;
   - Para todos os casos não atendidos acima deve ser retornado o código de status e um `JSON` com uma mensagem de erro;
   <br> **EX:** status `400` e `{ "message": "invalid data" }`;
   - Caso tenha sucesso deve ser retornado uma resposta com o código de status e um `JSON` com uma mensagem de sucesso;
   <br> **EX:** status `201` e `{ "message": "user created" }`;

 - Crie uma rota `POST` `/user/login` que receba uma requisição que envie `email` / `password` no `body` da requisição e devolva um `token` como resposta, onde:
   - O formato desse `token` retornado deve ser uma _string_ aleatória com `12` caracteres;
   - O `email` recebido deve ter o formato `email@mail.com`;
   - O `password` deve conter no mínimo `4` caracteres e no máximo `8`, todos números;
   - Para todos os casos não atendidos acima deve ser retornado o código de status e um `JSON` com uma mensagem de erro;
   <br> **EX:** status `400` e `{ "message": "email or password is incorrect" }`;
   - Caso tenha sucesso deve ser retornado uma resposta com o código de status e um `JSON` com uma mensagem de sucesso; 
   <br> **EX:** status `200` e `{ "token": "86567349784e" }`;
  
  **_Dicas: separe suas rotas em arquivos e utilize `middlewares` para validar os campos recebidos nas requisições_**


_**Exercícios 26.5 - Parte II**_

 - Crie uma rota `GET` `/btc/price` que receba uma requisição com um `token` na chave `Authorization` do `headers` da requisição e verifique se ele está correto, onde:
   - O `token` deve ser uma _string_ de `12` caracteres contendo letras e/ou números;
   - Para todos os casos não atendidos acima deve ser retornado o código de status e um `JSON` com uma mensagem de erro;
   <br> **EX:** status `401` e `{ "message": "invalid token" }`;
   - Caso tenha sucesso deve ser feito um _fetch_ em uma _API_ externa de sua preferência e retorne os dados da _API_ como resposta;
  
      **_Dicas: - Sugestão de API (https://api.coindesk.com/v1/bpi/currentprice/BTC.json);_**
      - O token será passado pelo header da seguinte forma: `authorization: 86567349784e`;
      - Utilize `middlewares` para validar o `token`;
      - Para fazer uma requisição a uma _API_ externa utilize o `FETCH` ou `AXIOS`, parecido com que vimos em **Front-end**.


_**Exercícios 26.5 - Parte III**_

 - Crie uma rota `GET` `/posts/:id` que receba uma requisição com um `id` como `param` `route`, verifique existência do `post` com aquele `id`, onde:
   - O `id` deve existir;
   - Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro;
   <br> **EX:** status `404` e `{ "message": "post not found" }`;
   - Caso tenha sucesso deve ser retornado uma resposta com o código de status e um `JSON` com as informações do respectivo `post`;

 - Crie uma rota `GET` `/posts` que deve trazer todos os posts cadastrados, onde:
   - Se não existir `posts` cadastrados retorne um _array_ vazio e um `status code`;
   <br> **EX:** status `200` e `{ "posts": [] }`;
   - Se existir `posts` cadastrados retorne um _array_ com os `posts` e um `status code`;

 - Faça um `middleware` de erro. Caso tenha sido requisitada uma rota inexistente deve ser retornado o código de status e um `JSON`;
 <br> **EX:** status `404` e `{ "message": "Opsss, route not found!" }`;
  
  **_Dicas: separe suas rotas em arquivos e utilize `middleware` de erro para capturar uma rota inexistente_**


_**Exercícios 26.5 - Parte IV**_

 - Crie uma rota `POST` `/teams` que receba uma requisição que envie `name`, `initials`, `country` e `league` no `body` da requisção, onde:
   - `name` deve ter mais de `5` caracteres;
   - `initials` deve conter no máximo `3` caracteres em caixa alta;
   - `country` deve ter mais de `3` caracteres;
   - `league` este campo é opcional;
   - Para todos os casos não atendidos acima deve ser retornado o código de status e um `JSON` com uma mensagem de erro;
   <br> **EX:** status `400` e `{ "message": "invalid data" }`;
   - Caso tenha sucesso deve ser gravado em um arquivo o dado recebido e retornado uma resposta com o código de status e um `JSON` com as informações do time criado;

 - Na rota `GET` `/teams` deve trazer todos os times cadastrados, onde:
   - Se não existir times cadastrados retorne um _array_ vazio e um `status code`;
   <br>**EX:** status `200` e `{ "teams": [] }`;
   - Se existir times cadastrados retorne um _array_ com os times e um `status code`;

 - Faça um `middleware` de erro. Caso tenha sido requisitada uma rota inexistente deve ser retornado o código de status e um `JSON`;
 <br> **EX:** status `404` e `{ "message": "Opsss, route not found!" }`;
  
  **_Dicas: separe suas rotas em arquivos e para gravar/ler dados do arquivo, utilize o módulo `FS` do `Node.js` (Não esqueça de criar o arquivo `teams.json` na raiz do projeto)_**
