### Bloco 28, Dia 1 -> NodeJS - JWT - (JSON Web Token)

Antes de começar, crie um novo projeto chamado `hello-jwt` utilizando o comando `npm init @tryber/backend hello-jwt`, aceitando as opções padrão.

_**Exercícios 28.1 - Parte I**_

 - Crie um _endpoint_ `POST` `/login`;

 - O _endpoint_ deve receber os seguintes dados no corpo da requisição:

```json
{
  "username": "someUsername",
  "password": "somePassword"
}
```

 - Caso `username` e `password` sejam válidos, retorne um `token` que atenda às seguintes especificações:
   - Expira em uma hora;
   - Contém, no `payload`, o nome de usuário informado na `request`;
   - Contém, no `payload`, uma propriedade `admin`, com o valor `false`;
<br><br>

 - Para retornar o `token`, utilize o seguinte formato no corpo da resposta:

```json
{
  "token": "<JWT aqui>"
}
```

 - Para que `username` seja válido, seu valor precisa ser uma `string` **alfanumérica** de, pelo menos, 5 caracteres;

 - Para que `password` seja válido, seu valor precisa ser uma `string` de, pelo menos, 5 caracteres;


_**Exercícios 28.1 - Parte II**_

 - Altere o _endpoint_ `POST` `/login`;

 - Caso `username` seja `admin` e `password` seja `s3nh4S3gur4???`, a chave `admin` no `payload` do `token` gerado deve ter o valor `true`;


_**Exercícios 28.1 - Parte III**_

 - Crie o _endpoint_ `GET` `/users/me`;

 - O _endpoint_ só pode ser acessado por pessoas autenticadas;

 - Para realizar a autenticação, a requisição deve conter o `header` `Authorization`, cujo valor deve ser um `token` válido;

 - Caso o `token` não exista, retorne o status `401 Unauthorized`, com o seguinte corpo da resposta:

```json
{
  "error": {
    "message": "Token not found"
  }
}
```

 - Caso aconteça um erro ao validar o `token`, retorne o status `401 Unauthorized` com o seguinte conteúdo no corpo:

```json
{
  "error": {
    "message": "<mensagem de erro da biblioteca>"
  }
}
```

 - Caso o `token` seja válido, retorne o status `200 OK` e, no corpo da resposta, o nome de usuário ao qual aquele `token` pertence e o valor da propriedade `admin`, no seguinte formato:

```json
{
  "username": "nome de usuario do token",
  "admin": true || false
}
```

 - Utilize um `middleware` exclusivo para a autenticação. Armazene-o no arquivo `middlewares/auth.js`;


_**Exercícios 28.1 - Parte IV**_

 - Crie o _endpoint_ `GET` `/top-secret`;

 - O _endpoint_ só pode ser acessado por pessoas autenticadas;

 - Apenas `tokens` contendo, no `payload`, a propriedade `admin` com o valor `true` têm autorização para acessar esse _endpoint_;

 - Caso o `token` não exista, retorne o status `401 Unauthorized`, com o seguinte corpo da resposta:

```json
{
  "error": {
    "message": "Token not found"
  }
}
```

 - Caso aconteça um erro ao validar o `token`, retorne o status `401 Unauthorized` com o seguinte conteúdo no corpo:

```json
{
  "error": {
    "message": "<mensagem de erro da biblioteca>"
  }
}
```

 - Caso o `token` seja válido, mas a propriedade `admin` do payload não seja `true`, retorne o status `403 Forbidden` e o seguinte `JSON`:

```json
{
  "error": {
    "message": "Restricted access"
  }
}
```

 - Caso o `token` seja válido e o `payload` contenha `admin` com o valor `true`, retorne o seguinte `JSON`:

```json
{
  "secretInfo": "Peter Parker é o Homem-Arannha"
}
```

 - Para validar se a pessoa é `admin`, crie um novo `middleware` no arquivo `middlewares/admin.js`;


_**Exercícios 28.1 - Parte BONUS**_

 - Crie o _endpoint_ `POST` `/signup`;

 - O _endpoint_ deve aceitar o seguinte `JSON` no corpo da requisição:

```json
{
  "username": "MariaCecília_Souza92",
  "password": "%9!%e'c0c5w,q%%h9n3k"
}
```

 - Para validar os campos, considere os mesmos critérios do _endpoint_ `POST` `/login`;

 - Caso `username` já exista, retorne o status `409 Conflict` e o seguinte `JSON`:

```json
{
   "error": { "message": "user already exists" }
}
```

 - Caso os campos sejam válidos, armazene os dados no arquivo `models/data/users.json`;

 - Ao armazenar os dados recebidos, adicione a propriedade `admin`, que terá seu valor determinado da seguinte forma:
   - Obtenha um número aleatório de 1 a 100 com o seguinte trecho de código: `Math.floor(Math.random() * 100)`;
   - Caso o número aleatório seja **maior que** 50, `admin` deve ser `true`;
   - Caso o número aleatório seja **menor ou igual a** 50 , `admin` deve ser `false`;
<br><br>

 - Após armazenar os novos dados, retorne um `token` que expire em uma hora e contenha `username` e `admin` no `payload`. Utilize o seguinte formato na resposta:

```json
  {
    "token": "<token gerado aqui>"
  }
```

 - Altere o _endpoint_ de `login`:
   - Antes de gerar o `token`, verifique se o nome de usuário e a senha informados existem no arquivo `users.json`;

   - Não permita mais o `login` do usuário `admin` com a senha fixa;

   - Informe, na propriedade `admin` do `payload` do `token`, o mesmo valor da propriedade `admin` que está armazenado para aquela pessoa;
