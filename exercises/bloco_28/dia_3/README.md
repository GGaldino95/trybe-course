### Bloco 28, Dia 3 -> NodeJS - Testando APIs com Testes de Integração

Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!

Iremos dar seguimento ao projeto visto durante a aula. Para isso, certifique-se de tê-lo clonado [deste link](https://github.com/tryber/nodejs-jwt-base-project);

Utilizando o processo de `TDD`, você irá implementar, a partir de testes, um _endpoint_ para busca de dados de um usuário a partir do seu `ID`: `GET` `/api/users/:userId`. Cada exercício conterá um dos requisitos a ser implementado;

Lembre-se de utilizar os conceitos visto até aqui:

 - Utilize `TDD`, ou seja, inicie um requisito escrevendo as asserções necessárias para validar aquele cenário, em seguida implemente o código necessário e por fim, faça os ajustes necessários para que o teste fique compatível com sua implementação.
 - Nos testes, **isole o `IO`** utilizando a técnica de subir o banco de dados em memória;
 - Utilize o plugin do `chai` de `requests` _HTTP_ para consumir seus _endpoints_ diretamente em seus testes.

_**Exercícios 28.3 - Parte I**_

O _endpoint_ deverá ser autenticado, exigindo o envio de um `token` no `header` da requisição. Caso não seja passado um `token`, o _endpoint_ deverá retornar:

 - Código de status `400 - Not Found`;

 - Mensagem de erro no `body` da `response` com o texto `Token não encontrado ou informado`;

 > Lembre-se de utilizar o `middleware` de autenticação para validação do `JWT`.


_**Exercícios 28.3 - Parte II**_

O usuário poderá ver somente os seus próprios dados. Ou seja, ao receber uma `request`, deverá ser comparado se o `ID` vindo no parâmetro é o mesmo do armazenado no `token`. Para isso, utilize o `middleware` de autenticação para recuperar o `ID` dentro do `token`. Caso não seja, a _API_ deverá retornar:

 - Código de status `401 - Unauthorized`;

 - Mensagem no `body` da `response` com o texto `Acesso negado`;


_**Exercícios 28.3 - Parte III**_

Caso o usuário esteja autenticado corretamente e esteja solicitando os dados de seu próprio usuário, o sistema deverá retornar:

   - Os dados da pessoa usuária em um objeto no corpo (`body`) da resposta (`response`);

   - Código de status `200 - OK`;
