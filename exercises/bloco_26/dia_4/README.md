### Bloco 26, Dia 4 -> Testes com Node.js

_**Exercícios 26.4 - Parte I**_

Inicie os exercícios criando uma aplicação Node.js com os comandos já aprendidos

 - Crie uma rota `GET` **/ping**;
   - Sua rota deve retornar o seguinte `JSON`: `{ message: 'pong' }`;

 - Crie uma rota `POST` **/hello**;
   - Sua rota deve receber, no `body` da requisição, o seguinte `JSON`: `{ "name": "<nome do usuário>" }`;
   - Sua rota deve retornar o seguinte `JSON`: `{ "message": "Hello, <nome do usuário>!" }`;

 - Crie uma rota `POST` **/greetings**;
   - Sua rota deve receber o seguinte `JSON`: `{ "name": "<nome do usuário>", "age": <idade do usuário> }`;
   - Caso a pessoa usuária tenha idade **superior** a 17 anos, devolva o `JSON` `{ "message": "Hello, <nome do usuário>!" }`; com o `status code` `200 - OK`;
   - Caso a pessoa usuária **tenha** 17 anos ou **menos**, devolva o `JSON` `{ "message": "Unauthorized" }` com o `status code` `401 - Unauthorized`;

 - Crie uma rota `PUT` **/users/:name/:age**;
   - Sua rota deve retornar o seguinte `JSON`: `{ "message": "Seu nome é <name> e você tem <age> anos de idade" }`;

 - Crie uma _API_ de dados das personagens de **Simpsons**;
   - Crie um arquivo chamado `simpsons.json` e popule com os seguintes dados:
      ```JSON
      [
        {
          "id": "1",
          "name": "Homer Simpson"
        },
        {
          "id": "2",
          "name": "Marge Simpson"
        },
        {
          "id": "3",
          "name": "Bart Simpson"
        },
        {
          "id": "4",
          "name": "Lisa Simpson"
        },
        {
          "id": "5",
          "name": "Maggie Simpson"
        },
        {
          "id": "6",
          "name": "Ned Flanders"
        },
        {
          "id": "7",
          "name": "Montgomery Burns"
        },
        {
          "id": "8",
          "name": "Nelson Muntz"
        },
        {
          "id": "9",
          "name": "Krusty"
        },
        {
          "id": "10",
          "name": "Milhouse Van Houten"
        }
      ]
      ```
   - Utilize o módulo `fs` do `Node` para ler/escrever arquivos;
   - Caso algum erro ocorra, deve ser retornado um código `500 (Internal Server Error)`;
   - Caso dê tudo certo, a resposta deve voltar com status `200 OK`;
   - Para testar sua _API_ durante o desenvolvimento, utilize ferramentas que permitem fazer requisições `HTTP`, como `Postman`, `Insomnia` ou `httpie`;

 - Crie um _endpoint_ `GET` **/simpsons**;
   - O _endpoint_ deve retornar um _array_ com todos os simpsons;

 - Crie um _endpoint_ `GET` **/simpsons/:id**;
   - O _endpoint_ deve retornar o personagem com o `id` informado na _URL_ da requisição;
   - Caso não exista nenhum personagem com o `id` especificado, retorne o `JSON` `{ message: 'simpson not found' }` com o status `404 - Not Found`;

 - Crie um _endpoint_ `POST` **/simpsons**;
   - Este _endpoint_ deve cadastrar novos personagens;
   - O corpo da requisição deve receber o seguinte `JSON`: `{ id: <id-da-personagem>, name: '<nome-da-personagem>' }`;
   - Caso já exista uma personagem com o `id` informado, devolva o `JSON` `{ message: 'id already exists' }` com o status `409 - Conflict`;
   - Caso a personagem ainda não exista, adicione-a ao arquivo `simpsons.json` e devolva um `body` vazio com o status `204 - No Content`. Para encerrar a _request_ sem enviar nenhum dado, você pode utilizar `res.status(204).end()`;

_**Exercícios 26.4 - Parte BONUS**_

 - Adicione autenticação a todos os _endpoints_;
   - O _token_ deve ser enviado através do _header_ `Authorization`;
   - O _token_ deve ter exatamente `16` caracteres;
   - Caso o _token_ seja inválido ou inexistente, a resposta deve possuir o status `401 - Unauthorized` e o `JSON` `{ message: 'Token inválido!' }`;

 - Crie uma rota `POST` **/signup**;
   - A rota deve receber, no `body` da requisição, os campos `email`, `password`, `firstName` e `phone`;
   - Caso algum dos campos não esteja preenchido, a response deve possuir status `401 - Unauthorized` e o `JSON` `{ message: 'missing fields' }`;
